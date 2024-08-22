import { updateSection } from "@/actions/updateSection";
import React, { useCallback, useEffect } from "react";
import {
  DeepPartial,
  FieldValues,
  FormProviderProps,
  Path,
  useForm,
  UseFormProps,
  useWatch,
} from "react-hook-form";
import { ZodSchema } from "zod";

const useAutoSaveForm = <T extends FieldValues>(
  schema: ZodSchema,
  sectionName: string,
  options?: UseFormProps<T>
) => {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    clearErrors,
    control,
    formState: { isValid, errors },
    setValue,
  } = useForm<T>(options);

  const watchValues = useWatch({ control });

  const onSubmit = useCallback(
    (data: DeepPartial<T>) => {
      console.log(data);
      const isValid = schema.safeParse(data);
      if (!isValid.success) {
        console.log("error", isValid.error.errors);
        isValid.error.errors.map((error) => {
          setError(error.path.join(".") as Path<T>, {
            type: "manual",
            message: error.message,
          });
        });
        return;
      }
      clearErrors();
      console.log("Save to", sectionName, data);
      updateSection(sectionName, data);
    },
    [schema, setError, clearErrors, sectionName]
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    //auto save to db on change with a debounce
    timeout = setTimeout(() => {
      onSubmit(watchValues);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [watchValues, handleSubmit, onSubmit]);

  return { register, watch, errors, setValue };
};

export default useAutoSaveForm;

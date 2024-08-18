import { updateSection } from "@/actions/updateSection";
import React, { useCallback, useEffect } from "react";
import {
  DeepPartial,
  FieldValues,
  FormProviderProps,
  Path,
  useForm,
  UseFormProps,
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
    formState: { isValid, errors },
  } = useForm<T>(options);

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
      updateSection(sectionName, data as T);
    },
    [schema, setError, clearErrors, sectionName]
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const subscription = watch((value) => {
      //auto save to db on change with a debounce
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        console.log(isValid);
        onSubmit(value);
      }, 1000);
    });
    return () => {
      subscription.unsubscribe();
      clearTimeout(timeout);
    };
  }, [watch, isValid, handleSubmit, onSubmit]);

  return { register, watch, errors };
};

export default useAutoSaveForm;

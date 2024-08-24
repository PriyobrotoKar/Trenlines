import { updateSection } from "@/actions/updateSection";
import { useSyncIndicator } from "@/providers/SyncIndicatorProvider";
import React, { useCallback, useEffect } from "react";
import {
  DeepPartial,
  FieldValues,
  FormProviderProps,
  Path,
  useForm,
  UseFormProps,
  UseFormReturn,
  UseFormWatch,
  useWatch,
} from "react-hook-form";
import { ZodSchema } from "zod";

const useAutoSaveForm = <T extends FieldValues>(
  schema: ZodSchema,
  sectionName: string,
  options?: UseFormProps<T>
) => {
  const form = useForm<T>(options);
  const {
    register,
    watch,
    handleSubmit,
    setError,
    clearErrors,
    control,
    formState: { isValid, errors },
  } = form;

  const { setSyncing } = useSyncIndicator();

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
        setSyncing(false);
        return;
      }
      clearErrors();
      console.log("Save to", sectionName, data);
      updateSection(sectionName, data);
      setSyncing(false);
    },
    [schema, setError, clearErrors, sectionName, setSyncing]
  );

  useEffect(() => {
    setSyncing(true);
    let timeout: NodeJS.Timeout;
    //auto save to db on change with a debounce
    timeout = setTimeout(() => {
      onSubmit(watchValues);
    }, 1000);
    return () => {
      setSyncing(false);
      clearTimeout(timeout);
    };
  }, [watchValues, handleSubmit, onSubmit, setSyncing]);

  return { ...form, watch } as UseFormReturn<T> & UseFormWatch<T>;
};

export default useAutoSaveForm;

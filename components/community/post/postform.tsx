"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Upload, message as antdMessage } from "antd";
import type { UploadProps } from "antd";
import { useState } from "react";
import { ErrorLabel, Button, Input } from "@/design-system";
import {
  ClientCommunityPostValidations,
  ClientCommunityPostValidationsType,
  MAX_FILE_SIZE_MB,
} from "@/validations";

type PostFormProps = {
  question: string;
  commentsCount: number;
};

export default function PostForm({ question, commentsCount }: PostFormProps) {
  const [fileList, setFileList] = useState([]);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ClientCommunityPostValidationsType>({
    resolver: zodResolver(ClientCommunityPostValidations),
  });

  const onSubmit = (data: ClientCommunityPostValidationsType) => {
    console.log("Submitted data:", data);
    reset();
    setFileList([]);
  };

  const handleBeforeUpload = (file: File) => {
    const isValidSize = file.size / 1024 / 1024 <= MAX_FILE_SIZE_MB;
    if (!isValidSize) {
      antdMessage.error("File must be smaller than 1MB");
    }
    return isValidSize || Upload.LIST_IGNORE;
  };

  const handleChange: UploadProps["onChange"] = (info) => {
    const newFile: any = info.fileList.slice(-1);
    setFileList(newFile);

    if (newFile.length > 0 && newFile?.[0]) {
      setValue("file", newFile?.[0]);
    } else {
      setValue("file", undefined);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-1 border-muted w-full h-max p-3 rounded-[12px]"
    >
      <label className="font-[400] text-sm font-poppins">{question}</label>
      <Input
        {...register("message")}
        placeholder="Detailed Message here"
        className="border-1 border-muted mt-3"
      />
      {errors.message && (
        <p className="text-destructive text-sm">{errors.message.message}</p>
      )}

      <div className="flex justify-between items-center pt-2 mt-14">
        <p className="text-sm ">Comments({commentsCount})</p>

        <div className="flex gap-3">
          <Button type="submit">Post Now</Button>
          <Controller
            control={control}
            name="file"
            render={() => (
              <Upload
                beforeUpload={handleBeforeUpload}
                onChange={handleChange}
                fileList={fileList}
                maxCount={1}
                listType="text"
              >
                <Button type="button" variant={"outline"}>
                  Attach File
                </Button>
              </Upload>
            )}
          />
          {errors?.file && (
            <ErrorLabel message={errors?.file?.message as string} />
          )}
        </div>
      </div>
    </form>
  );
}

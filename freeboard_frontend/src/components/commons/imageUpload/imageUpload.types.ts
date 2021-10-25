import { ChangeEvent, RefObject } from "react";

export interface IUploadProps {
  index: number;
  onChangeFiles: (file: File, index: number) => void;
  defaultFileUrl?: string[]|{} | string;
}

export interface IUploadUIProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  defaultFileUrl?: string[]|{} | string;
} 
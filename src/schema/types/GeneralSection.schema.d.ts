/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface GeneralSectionSchema {
  id?: number;
  title?: string;
  description?: string;
  published?: boolean;
  slug?: string;
  createdAt?: string;
  updatedAt?: string;
  tags?: (
    | string
    | {
        [k: string]: unknown;
      }
  )[];
  [k: string]: unknown;
}
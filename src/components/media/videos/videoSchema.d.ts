/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface VideoInstance {
  type: string;
  url: string;
  etag: string;
  title: string;
  tags: string[];
  thumbnails: {
    default: {
      url: string;
      width: number;
      height: number;
      [k: string]: unknown;
    };
    medium: {
      url: string;
      width: number;
      height: number;
      [k: string]: unknown;
    };
    high: {
      url: string;
      width: number;
      height: number;
      [k: string]: unknown;
    };
    standard: {
      url: string;
      width: number;
      height: number;
      [k: string]: unknown;
    };
    maxres: {
      url: string;
      width: number;
      height: number;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  description: string;
  publishedAt: string;
  duration: string;
  definition: string;
  [k: string]: unknown;
}
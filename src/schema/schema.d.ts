/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Schema {
  generalSection?: GeneralSection;
  imageRef?: ImageRef;
  videoRef?: VideoRef;
  post?: Post;
  preferences?: Preferences;
  project?: Project;
  tag?: Tag;
  socialMedia?: SocialMedia;
  contact?: Contact;
  profile?: Profile;
  user?: User;
  work?: Work;
  [k: string]: unknown;
}
export interface GeneralSection {
  id?: number;
  title?: string;
  description?: string | null;
  published?: boolean;
  slug?: string;
  createdAt?: string;
  updatedAt?: string | null;
  [k: string]: unknown;
}
export interface ImageRef {
  etag?: string;
  public_id?: string;
  mediaType?: "IMAGE" | "VIDEO" | "THREE_D";
  cld_url?: string;
  path?: string;
  filename?: string;
  format?: string;
  bytes?: number;
  description?: string;
  width?: number;
  height?: number;
  createdAt?: string;
  updatedAt?: string | null;
  [k: string]: unknown;
}
export interface VideoRef {
  etag?: string;
  mediaType?: "IMAGE" | "VIDEO" | "THREE_D";
  id?: string | null;
  vimeo_url?: string | null;
  sc_url?: string | null;
  yt_url?: string | null;
  title?: string;
  duration?: string | null;
  definition?: string | null;
  description?: string;
  thumbnail?: string | null;
  player_loop?: boolean;
  player_muted?: boolean;
  createdAt?: string;
  updatedAt?: string | null;
  [k: string]: unknown;
}
export interface Post {
  id?: number;
  html?: string | null;
  generalId?: number;
  authorEmail?: string;
  [k: string]: unknown;
}
export interface Preferences {
  id?: number;
  creator_name?: string;
  homepage_heading?: string;
  homepage_subheading?: string;
  enable_dashboard_darkmode?: boolean;
  enable_portfolio_pdf?: boolean;
  createdAt?: string;
  updatedAt?: string | null;
  videoRefEtag?: string | null;
  imageRefEtag?: string | null;
  [k: string]: unknown;
}
export interface Project {
  id?: number;
  subtitle?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  venue?: string | null;
  generalId?: number;
  [k: string]: unknown;
}
export interface Tag {
  id?: number;
  name?: string;
  [k: string]: unknown;
}
export interface SocialMedia {
  id?: number;
  platform?: string | null;
  profileUrl?: string | null;
  username?: string | null;
  [k: string]: unknown;
}
export interface Contact {
  id?: number | null;
  email?: string | null;
  socialmedia?: SocialMedia[];
  [k: string]: unknown;
}
export interface Profile {
  html_statement?: string | null;
  html_additional?: string | null;
  portfolio_pdf?: string | null;
  contact?: Contact[];
  [k: string]: unknown;
}
export interface User {
  id?: number;
  email?: string;
  hash?: string;
  salt?: string;
  [k: string]: unknown;
}
export interface Work {
  id?: number;
  dimensions?: string | null;
  year?: number | null;
  generalId?: number;
  [k: string]: unknown;
}

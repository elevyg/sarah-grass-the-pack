// Interface automatically generated by schemas-to-ts

import { Media } from '../common/Media';
import { Media_Plain } from '../common/Media';
import { AdminPanelRelationPropertyModification } from '../common/AdminPanelRelationPropertyModification';

export enum Status {
  Active = 'active',
  Suspended = 'suspended',
  Finished = 'finished',}

export interface Offering {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    title: string;
    instructor: string;
    description: string;
    starting_date?: Date;
    slug?: string;
    status?: Status;
    event_info?: string;
    squared_image: { data: Media };
  };
}
export interface Offering_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title: string;
  instructor: string;
  description: string;
  starting_date?: Date;
  slug?: string;
  status?: Status;
  event_info?: string;
  squared_image: Media_Plain;
}

export interface Offering_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title: string;
  instructor: string;
  description: string;
  starting_date?: Date;
  slug?: string;
  status?: Status;
  event_info?: string;
  squared_image: number;
}

export interface Offering_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title: string;
  instructor: string;
  description: string;
  starting_date?: Date;
  slug?: string;
  status?: Status;
  event_info?: string;
  squared_image: AdminPanelRelationPropertyModification<Media_Plain>;
}

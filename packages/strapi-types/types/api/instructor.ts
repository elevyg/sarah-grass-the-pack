// Interface automatically generated by schemas-to-ts

import { Offering } from './offering';
import { Offering_Plain } from './offering';
import { AdminPanelRelationPropertyModification } from '../common/AdminPanelRelationPropertyModification';

export interface Instructor {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    full_name: string;
    description?: string;
    slug?: string;
    offerings?: { data: Offering[] };
  };
}
export interface Instructor_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  full_name: string;
  description?: string;
  slug?: string;
  offerings?: Offering_Plain[];
}

export interface Instructor_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  full_name: string;
  description?: string;
  slug?: string;
  offerings?: number[];
}

export interface Instructor_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  full_name: string;
  description?: string;
  slug?: string;
  offerings?: AdminPanelRelationPropertyModification<Offering_Plain>;
}

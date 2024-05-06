// Interface automatically generated by schemas-to-ts

export interface Course {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    Title?: string;
    Description?: string;
  };
}
export interface Course_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Title?: string;
  Description?: string;
}

export interface Course_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Title?: string;
  Description?: string;
}

export interface Course_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Title?: string;
  Description?: string;
}

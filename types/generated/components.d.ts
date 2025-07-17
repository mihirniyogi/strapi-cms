import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectTechnology extends Struct.ComponentSchema {
  collectionName: 'components_project_technologies';
  info: {
    displayName: 'technology';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.technology': ProjectTechnology;
    }
  }
}

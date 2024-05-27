import type { Schema, Attribute } from '@strapi/strapi';

export interface OfferingTypesClass extends Schema.Component {
  collectionName: 'components_offering_types_classes';
  info: {
    displayName: 'Class';
    description: '';
  };
  attributes: {
    monthlyPrice: Attribute.String;
    yearlyPrice: Attribute.String;
    monthlyPricePaymentLink: Attribute.String;
    yearlyPricePaymentLink: Attribute.String;
    actionButtonText: Attribute.String & Attribute.DefaultTo<'Register Now'>;
    monthlyPriceSubtitle: Attribute.String &
      Attribute.DefaultTo<'monthly payment of '>;
    yearlyPriceSubtitle: Attribute.String & Attribute.DefaultTo<'pay in full'>;
    shortActionButtonText: Attribute.String & Attribute.DefaultTo<'Register'>;
  };
}

export interface OfferingTypesOneOnOne extends Schema.Component {
  collectionName: 'components_offering_types_one_on_ones';
  info: {
    displayName: 'One on one';
    description: '';
  };
  attributes: {
    actionButtonText: Attribute.String & Attribute.DefaultTo<'Book Now'>;
    price: Attribute.String;
    shortActionButtonText: Attribute.String & Attribute.DefaultTo<'Book'>;
    contactEmail: Attribute.Email;
  };
}

export interface OfferingTypesPrice extends Schema.Component {
  collectionName: 'components_offering_types_prices';
  info: {
    displayName: 'Open session';
    icon: 'server';
    description: '';
  };
  attributes: {
    price: Attribute.String;
    actionButtonText: Attribute.String &
      Attribute.DefaultTo<'Add me to the mailing list'>;
    shortActionButtonText: Attribute.String & Attribute.DefaultTo<'Learn More'>;
    contactEmail: Attribute.Email;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'offering-types.class': OfferingTypesClass;
      'offering-types.one-on-one': OfferingTypesOneOnOne;
      'offering-types.price': OfferingTypesPrice;
    }
  }
}

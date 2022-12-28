import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'ylzbvtx3',
    dataset: 'production',
    apiVersion: '2022-12-26',
    useCdn: true,
    token: process.env.NEXT_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (_uuu) => builder.image(_uuu)
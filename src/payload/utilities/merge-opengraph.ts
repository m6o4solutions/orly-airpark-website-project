import { getServerSideURL } from "@/payload/utilities/get-url";
import type { Metadata } from "next";

// default open graph metadata used across pages
const defaultOpenGraph: Metadata["openGraph"] = {
	type: "website",
	description:
		"Orly Airpark is a private airfield in Kenya's Rift Valley. Pilots get runway charts, PPR forms, and membership info for our community.",
	images: [{ url: `${getServerSideURL()}/orly-airpark-aerial-view.jpg` }],
	siteName: "Orly Airpark",
	title: "Orly Airpark",
};

// merges provided open graph data with defaults to ensure required fields exist
const mergeOpenGraph = (og?: Metadata["openGraph"]): Metadata["openGraph"] => {
	return {
		...defaultOpenGraph,
		...og,
		// keep custom images if provided, otherwise use default ones
		images: og?.images ? og.images : defaultOpenGraph.images,
	};
};

export { mergeOpenGraph };

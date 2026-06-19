import { ContentfulRichTextProps, CustomRenderers } from "@/types/contenful";
import {
  Box,
  Code,
  Heading,
  Image,
  List,
  Separator,
  Table,
  Text,
} from "@chakra-ui/react";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import React from "react";
import { DynamicLink } from "../atoms/DynamicLink";

const createRichTextOptions = (customRenderers?: CustomRenderers): Options => ({
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => (
      <Code colorScheme="purple" px={1}>
        {text}
      </Code>
    ),
  },

  renderNode: {
    // --- Headings ---
    [BLOCKS.HEADING_1]: (_, children) => (
      <Heading as="h1" size="2xl" my={4}>
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_2]: (_, children) => (
      <Heading as="h2" size="xl" my={4}>
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_3]: (_, children) => (
      <Heading as="h3" size="lg" my={3}>
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_4]: (_, children) => (
      <Heading as="h4" size="md" my={2}>
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_5]: (_, children) => (
      <Heading as="h5" size="sm" my={2}>
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_6]: (_, children) => (
      <Heading as="h6" size="xs" my={2}>
        {children}
      </Heading>
    ),

    // --- Blocks & Layout ---
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <Text mb={4} lineHeight="tall">
        {children}
      </Text>
    ),
    [BLOCKS.QUOTE]: (_, children) => (
      <Box
        borderLeft="4px solid"
        borderColor="teal.500"
        pl={4}
        my={4}
        fontStyle="italic"
        color="gray.600"
      >
        {children}
      </Box>
    ),
    [BLOCKS.HR]: () => <Separator my={6} />,

    // --- Lists ---
    [BLOCKS.UL_LIST]: (_, children) => (
      <List.Root as="ul" gap={2} mb={4} pl={4}>
        {children}
      </List.Root>
    ),
    [BLOCKS.OL_LIST]: (_, children) => (
      <List.Root as="ol" gap={2} mb={4} pl={4}>
        {children}
      </List.Root>
    ),
    [BLOCKS.LIST_ITEM]: (_, children) => <List.Item>{children}</List.Item>,

    // --- Tables ---
    [BLOCKS.TABLE]: (_, children) => (
      <Table.Root
        size="sm"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="md"
        my={6}
      >
        {children}
      </Table.Root>
    ),
    [BLOCKS.TABLE_ROW]: (_, children) => <Table.Row>{children}</Table.Row>,
    [BLOCKS.TABLE_HEADER_CELL]: (_, children) => (
      <Table.Header bg="gray.50">{children}</Table.Header>
    ),
    [BLOCKS.TABLE_CELL]: (_, children) => <Table.Cell>{children}</Table.Cell>,

    // --- Embedded Assets (Images/Files) ---
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, file } = node.data.target.fields;
      const imageUrl = file?.url;
      const altText = title || "Contentful Image";

      if (!imageUrl) return null;

      return (
        <Box my={6} textAlign="center">
          <Image
            src={`https:${imageUrl}`}
            alt={altText}
            borderRadius="md"
            maxH="500px"
            mx="auto"
          />
          {title && (
            <Text fontSize="xs" color="gray.500" mt={2}>
              {title}
            </Text>
          )}
        </Box>
      );
    },

    // --- Embedded Entries (Blocks & Inline) ---
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      if (customRenderers?.renderEmbeddedEntry) {
        return customRenderers.renderEmbeddedEntry(node);
      }
      // Safe developer fallback if no renderer is supplied
      return (
        <Box
          p={4}
          my={4}
          bg="orange.50"
          border="1px dashed"
          borderColor="orange.300"
          borderRadius="md"
        >
          <Text fontSize="xs" color="orange.700" fontFamily="mono">
            [Embedded Entry Block: {node.data.target.sys.contentType.sys.id}]
          </Text>
        </Box>
      );
    },

    // --- Fixed: Inline Elements (Using INLINES enum) ---
    [INLINES.HYPERLINK]: (node, children) => (
      <DynamicLink
        href={node.data.uri}
        external
        chakraLinkProps={{ fontWeight: "medium" }}
      >
        {children}
      </DynamicLink>
    ),

    [INLINES.EMBEDDED_ENTRY]: (node) => {
      if (customRenderers?.renderEmbeddedEntry) {
        return customRenderers.renderEmbeddedEntry(node);
      }
      return (
        <Code colorScheme="orange">
          [Inline Entry: {node.data.target.sys?.id || "Unknown"}]
        </Code>
      );
    },

    [INLINES.ENTRY_HYPERLINK]: (node, children) => (
      <DynamicLink
        href={`/entries/${node.data.target.sys.id}`}
        chakraLinkProps={{ fontWeight: "medium" }}
      >
        {children}
      </DynamicLink>
    ),

    [INLINES.ASSET_HYPERLINK]: (node, children) => (
      <DynamicLink
        href={`https:${node.data.target.fields?.file?.url}`}
        external
        chakraLinkProps={{ fontWeight: "medium" }}
      >
        {children}
      </DynamicLink>
    ),
  },
});

export const ContentfulRichText: React.FC<ContentfulRichTextProps> = ({
  content,
  customRenderers,
}) => {
  if (!content) return null;

  const options = createRichTextOptions(customRenderers);
  return <>{documentToReactComponents(content, options)}</>;
};

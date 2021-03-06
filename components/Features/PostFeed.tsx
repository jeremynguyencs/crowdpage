import { Text, Flex } from "@chakra-ui/react";

import { Card, Link, Loader } from "components/Misc";

const PostItem = ({ post, admin = false }) => {
  const wordCount = post?.content?.split(" ").length;
  const minutesToRead = (wordCount / 200).toFixed(0);

  return (
    <Card>
      <Card.Body>
        <Link href={`/${post.username}/${post.slug}`} fontSize="2xl">
          {post.title}
        </Link>
        <Text>
          Submitted by @
          <Link href={`/${post.username}`} fontSize="sm">
            {post.username}
          </Link>
        </Text>
      </Card.Body>
      <Card.Footer>
        <Flex justify="space-between">
          <Flex gap={2}>
            <Text>{wordCount} words</Text>
            <Text>•</Text>
            <Text>
              {minutesToRead} {minutesToRead === "1" ? "minute" : "minutes"} to
              read
            </Text>
          </Flex>
          <Text>❤️️ {post.heartCount} hearts</Text>
        </Flex>
      </Card.Footer>
    </Card>
  );
};

const PostFeed = ({ posts, admin = false }) => {
  return posts ? (
    <Flex gap={4} flexDir="column">
      {posts.map((post) => (
        <PostItem post={post} key={post.slug} admin={admin} />
      ))}
    </Flex>
  ) : (
    <Loader show={true} />
  );
};

export default PostFeed;

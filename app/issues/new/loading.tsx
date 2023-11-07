import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import { Heading, Flex, Card, Box } from '@radix-ui/themes';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingNewIssuePage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default LoadingNewIssuePage;
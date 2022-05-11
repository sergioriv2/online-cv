import React from "react";
import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Layout = styled.div`
  margin: 30px 0;
  min-height: 400px;

  & > span:nth-child(1) span {
    margin-bottom: 10px !important;
    width: 50%;
  }

  & > span:nth-child(2) span {
    width: 80%;
  }
`;
const DetailsLayout = styled.div`
  width: 100%;
  @media screen and (min-width: 1024px) {
    min-height: 300px;
  }
`;

const Details = styled.div`
  margin: 15px 0;
  min-height: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > span {
    margin-bottom: 1.4em;
  }

  @media screen and (min-width: 1024px) {
    min-height: 300px;
    width: 50%;
    margin: 0;
    margin-left: 20px;
  }
`;

const Container = styled.div``;

const ProjectPlaceholder = () => {
  return (
    <Container>
      <SkeletonTheme baseColor="#0a1620" highlightColor="#162736">
        <Layout>
          <Skeleton />
          <Skeleton />
          <DetailsLayout>
            <Details>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </Details>
          </DetailsLayout>
        </Layout>
        <Layout>
          <Skeleton />
          <Skeleton />
          <DetailsLayout>
            <Details>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </Details>
          </DetailsLayout>
        </Layout>
      </SkeletonTheme>
    </Container>
  );
};

export default ProjectPlaceholder;

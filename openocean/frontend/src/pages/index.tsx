import { FC, useEffect, useState } from "react";
import { VStack } from "@chakra-ui/react";
import SectionTitle from "../molecules/SectionTitle";
import { useNavigate } from "react-router-dom";
import AvailableImages from "../organisms/AvailableImages";
import useGetImages from "../hooks/useGetImages";

const Home: FC = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<any[]>([]);
  const { mutate: getImages } = useGetImages();

  useEffect(() => {
    getImages(undefined, {
      onSuccess: (data) => {
        setImages(data.data);
      },
      onError: (error) => {
        console.error("Erreur :", error);
      },
    });
  }, [getImages]);

  return (
    <>
      {images && (
        <VStack align="start" w="100%" h="100%" spacing="24px">
          <SectionTitle title="Images" onClick={() => navigate("/images")} />
          <AvailableImages images={images} />
        </VStack>
      )}
    </>
  );
};

export default Home;

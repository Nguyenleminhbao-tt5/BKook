
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";
import {Home} from "./Home";
<<<<<<< HEAD
import { Text } from "react-native";
import { View } from "native-base";
=======
>>>>>>> minhbao-dev

export const HomeContainer = () => {
  const [userId, setUserId] = useState("9");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);
  
  return (
<<<<<<< HEAD
    <>
      <Home data={data} isLoading={isLoading} />
    </>
=======
    <Home data={data} isLoading={isLoading} />
>>>>>>> minhbao-dev
  );
  
};

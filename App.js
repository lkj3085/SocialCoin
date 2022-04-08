import React, { useEffect, useState } from "react";

import InNav from "./navigator/Nav";
import OutNav from "./navigator/OutNav";

import auth from "@react-native-firebase/auth";
import { NavigationContainer } from "@react-navigation/native";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // console.log(auth().currentUser);
    auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {isLoggedIn ? <InNav /> : <OutNav />}
      </NavigationContainer>
    </QueryClientProvider>
  );
}

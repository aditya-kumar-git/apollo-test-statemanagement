
import { ApolloProvider } from "@apollo/client";
import HomePage from "./SpaceX/HomePage";
import './App.css';
import { client } from "./SpaceX/graphql/Queries";

export interface Istate {
  people: {
    age: number;
    name: string;
    notes?: string;
    url: string;
  }[];
}
function App() {
  return (
    <ApolloProvider client={client}>
      <HomePage />
    </ApolloProvider>

  );
}

export default App;

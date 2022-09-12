import Jokes from "../../src/endpoints/Jokes";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  getRandomJokeAxiosResponse,
  getJokeCategoriesAxiosResponse,
  searchJokesAxiosResponse,
} from "./data/jokesTestData";

let mock;
let jokesEndpoint: Jokes;

beforeEach(async (): Promise<void> => {
  mock = new MockAdapter(axios);
  jokesEndpoint = new Jokes();
});

describe("Unit test jokes endpoint class", (): void => {
 
  });
});

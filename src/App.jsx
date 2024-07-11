import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { HomePage } from "./pages/HomePage";
import { Categories } from "./pages/Categories";
import { SingleNews } from "./pages/SingleNews";


export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/category" element={<Categories />}/>
        <Route path="/single-news" element={<SingleNews />}/>
        <Route path="/dropdown"/>
        <Route path="/contact" />
      </Route>
    </Routes>
  );
}

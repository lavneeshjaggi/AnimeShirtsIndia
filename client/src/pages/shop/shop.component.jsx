import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Spinner from "../../components/spinner/spinner.component";

const CollectionPage = lazy(() => import("../collection/collection.component"));
const CollectionsOverview = lazy(() =>
  import("../../components/collections-overview/collections-overview.component")
);

const ShopPage = () => (
  <div className="shop-page">
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route index element={<CollectionsOverview />} />
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
    </Suspense>
  </div>
);

export default ShopPage;

import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = () => {
  const { collectionId } = useParams();

  const collectionSelector = useMemo(
    () => selectCollection(collectionId),
    [collectionId]
  );
  const collection = useSelector(collectionSelector);

  if (!collection) {
    return <div>Loading collection...</div>;
  }
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="items">
        {items &&
          items.map((item) => <CollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default CollectionPage;

import "./ExplainerModal.scss";

export const ExplainerModal = ({ info }) => {
  console.log(info.includes("🦐"));

  return (
    <div className="explainer-modal">
      <div className="explainer-modal__container">
        <div className="explainer-modal__title">
          <p>
            {info.includes("🦐")
              ? "Shrimp means you don't hold a lot of NFTs. None of value at least"
              : info.includes("🐟")
              ? "Fish means you hold some NFTs but nothing of serious value"
              : info.includes("🐬")
              ? "You hold some valuable NFTs"
              : info.includes("🦈")
              ? "You have quiet the valuable the collection"
              : info.includes("🐳")
              ? "You hold a lot of valuable NFTs"
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

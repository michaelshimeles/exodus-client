import "./PortfolioProfile.scss";
import { Badge } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import {
  Flex,
  Text,
  Show,
  Hide,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";

const PortfolioProfile = ({ ens, totalValue, scores, labels }) => {
  const { address } = useAccount();
  const borderColor = useColorModeValue("", "whiteAlpha.100");
  const bgColor = useColorModeValue("white", "blackAlpha.500");

  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__left">
          <Flex
            direction="column"
            justify="center"
            align="flex-start"
            gap="0.5rem"
          >
            <Hide below="lg">
              <Text fontWeight="bold" fontSize="1.4375rem">
                {ens ? ens : address}
              </Text>
              <Text>Ξ{Math.round(totalValue * 100) / 100}</Text>
            </Hide>
            <Show below="lg">
              <Text fontWeight="bold" fontSize="1rem">
                {ens ? ens : address}
              </Text>
              <Text fontSize="1rem">Ξ{Math.round(totalValue * 100) / 100}</Text>
            </Show>
          </Flex>
        </div>
        <div className="profile__stats">
          <Tooltip
            label={
              scores?.hands.includes("normie")
                ? "Normie Hands 😂"
                : scores?.hands.includes("new")
                ? "New baby"
                : scores?.hands.includes("paper")
                ? "Sells quick"
                : scores?.hands.includes("1")
                ? "Holds Sometimes"
                : scores?.hands.includes("2")
                ? "Holds Occasionally"
                : scores?.hands.includes("3")
                ? "Long Term Holder"
                : scores?.hands.includes("4")
                ? "Very Long Term Holder"
                : scores?.hands.includes("5")
                ? "The King of Holding"
                : ""
            }
            aria-label="A tooltip"
            placement="top-start"
          >
            <Badge
              py="0.25rem"
              px="0.5rem"
              bgColor={bgColor}
              border="1px"
              borderColor={borderColor}
            >
              <Text>
                {scores
                  ? scores.hands === "normie"
                    ? "👋 Normie Hands"
                    : scores.hands === "new"
                    ? "🐣 New"
                    : scores.hands === "paper"
                    ? "📜 Paper Hands"
                    : scores.hands === 1 || scores.hands === "1"
                    ? "Holds Sometimes"
                    : scores.hands === 2 || scores.hands === "2"
                    ? "Holds Occasionally"
                    : scores.hands === 3 || scores.hands === "3"
                    ? "Long Term Holder"
                    : scores.hands === 4 || scores.hands === "4"
                    ? "Very Long Term Holder"
                    : scores.hands === 5 || scores.hands === "5"
                    ? "King Holder"
                    : ""
                  : ""}
              </Text>
            </Badge>
          </Tooltip>
          <Tooltip
            placement="top-start"
            label={
              scores?.whaleness === 1
                ? "Shrimp means you don't own any NFTs of value. They all most likely went to $0 😂"
                : scores?.whaleness === 2
                ? "Fish means you hold some NFTs but nothing of serious value"
                : scores?.whaleness === 3
                ? "You hold some valuable NFTs"
                : scores?.whaleness === 4
                ? "You have quiet the valuable the collection"
                : scores?.whaleness === 5
                ? "You hold a lot of valuable NFTs"
                : ""
            }
          >
            <Badge
              py="0.25rem"
              px="0.5rem"
              bgColor={bgColor}
              border="1px"
              borderColor={borderColor}
            >
              <Text>
                {scores
                  ? scores.whaleness === 1
                    ? "🦐 Shrimp"
                    : scores.whaleness === 2
                    ? "🐟 fish"
                    : scores.whaleness === 3
                    ? "🐬 Dolphin"
                    : scores.whaleness === 4
                    ? "🦈 Shark"
                    : scores.whaleness === 5
                    ? "🐳 Whale"
                    : ""
                  : ""}
              </Text>
            </Badge>
          </Tooltip>
          {labels.map((label, index) => {
            return (
              <Tooltip
                placement="top-start"
                label={
                  label?.name === "diamond"
                    ? "This trader has some diamond hands"
                    : label?.name === "five-diamond"
                    ? "LEGENDARY DIAMOND HANDS"
                    : label?.name === "paperhands"
                    ? "Needs no explaining"
                    : label?.name === "whale"
                    ? "Holds a lot of NFTs"
                    : label?.name === "blue-chip"
                    ? "Holding blue chip status NFTs"
                    : label?.name === "smart-money"
                    ? "This trader knows what they're doing"
                    : label?.name === "top-minter"
                    ? "Top G of minting"
                    : label?.name === "top-trader"
                    ? "Top G at trading"
                    : ""
                }
              >
                <Badge
                  key={index}
                  py="0.25rem"
                  px="0.5rem"
                  bgColor={bgColor}
                  border="1px"
                  borderColor={borderColor}
                >
                  <Text>
                    {label.name
                      ? label.name === "diamond"
                        ? "💎 Diamond Hands"
                        : label.name === "five-diamond"
                        ? "💎 Top 3% Holder"
                        : label.name === "paperhands"
                        ? "📜 Paper Hands"
                        : label.name === "whale"
                        ? "🐳 Whale"
                        : label.name === "blue-chip"
                        ? "💸 Blue Chip"
                        : label.name === "smart-money"
                        ? "💰🧠 Smart Money"
                        : label.name === "top-minter"
                        ? "⛏️ Top Minter"
                        : label.name === "top-trader"
                        ? "📈 Top Trader"
                        : ""
                      : ""}
                  </Text>
                </Badge>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProfile;

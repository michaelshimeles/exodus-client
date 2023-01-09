import "./PortfolioProfile.scss";
import { useContext } from "react";
import { ExplainerContext } from "../../context/ExplainerContext";
import { Badge } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { Flex, Text, Show, Hide, useColorModeValue } from "@chakra-ui/react";

const PortfolioProfile = ({ ens, totalValue, scores, labels }) => {
  const [explainerHover, setExplainerHover] = useContext(ExplainerContext);
  const { address } = useAccount();
  const borderColor = useColorModeValue("", "whiteAlpha.100");
  const bgColor = useColorModeValue("white", "blackAlpha.500");

  const handleExplainer = (event) => {
    setExplainerHover({
      show: !explainerHover.show,
      info: event.target.textContent,
    });
  };

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
          <Badge
            onMouseEnter={handleExplainer}
            onMouseLeave={handleExplainer}
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
          <Badge
            onMouseEnter={handleExplainer}
            onMouseLeave={handleExplainer}
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
          {labels.map((label, index) => {
            return (
              <Badge
                key={index}
                onMouseEnter={handleExplainer}
                onMouseLeave={handleExplainer}
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProfile;

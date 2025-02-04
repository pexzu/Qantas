import styled from "@emotion/styled";

export const LogoBlock = styled.img`
  label: LogoBlock;
  height: 40px;
  padding: 16px;
`;

export const TabHead = styled.div`
  label: TabHead;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 6px 15px;
  white-space: nowrap;
  align-items: center;
`;

export const HotelsContainer = styled.div`
  label: HotelsContainer;
  display: flex;
  flex-wrap: nowrap;
  padding: 6px 0;
  justify-content: flex-start;
  margin: 6px 15px;
  > div:last-child {
    text-align: right;
    margin-left: auto;
  }
  @media (max-width: 714px) {
    flex-direction: column;
    > div:last-child {
      margin-left: initial;
    }
  }
`;

export const HotelsContentSection = styled.div`
  label: HotelsContentSection;
  display: flex;
  flex-direction: column;
  padding: 9px;
  justify-content: space-between;
  width: 60%;
  @media (max-width: 714px) {
    padding-left: 0;
  }
`;

export const HotelsContentRatingSection = styled.div`
  label: HotelsContentRatingSection;
  display: flex;
  flex-wrap: nowrap;
`;

export const HotelName = styled.div`
  label: HotelName;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 250px;
  margin-right: 6px;
  min-width: 50px;
`;

export const SortBlock = styled.div`
  label: SortBlock;
  display: flex;
  flex-wrap: nowrap;
`;

export const SortButton = styled.button`
  label: SortButton;
  margin-left: 3px;
  height: 20px;
  cursor: pointer;
  background-color: #135afb66;
  border-radius: 3px;
  border: none;
  &:hover {
    background-color: #135afb;
  }
  svg {
    margin: 0 auto;
    display: block;
  }
`;

export const SortContainer = styled.div`
  label: SortContainer;
  display: flex;
  border: 1px solid #00000082;
  border-radius: 4px;
  margin-left: 3px;
  font-size: 12px;
  padding-left: 6px;
  align-items: center;
  color: #3b3b3b;
  height: 20px;
  > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const CancellationBlock = styled.div`
  label: CancellationBlock;
  color: green;
  font-size: 12px;
`;

export const Link = styled.a`
  label: Link;
  color: #b10a0a;
  font-size: 12px;
`;

export const AddressBlock = styled.div`
  label: AddressBlock;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 250px;
  min-width: 50px;
  color: grey;
`;

export const Hr = styled.hr`
  label: Hr;
  margin-inline-start: 166px;
  border-color: #fdfdfd59;
  @media (max-width: 714px) {
    margin-inline-start: 0;
  }
`;

export const PricePer = styled.div`
  label: PricePer;
  display: flex;
  white-space: nowrap;
  font-size: 11px;
  color: #3b3b3b;
`;

export const Amount = styled.span`
  label: PricePer;
  display: flex;
  white-space: nowrap;
  font-size: 33px;
`;

export const AmountContainer = styled.div`
  label: AmountContainer;
  display: flex;
  margin-top: 3px;
  align-items: start;
  justify-content: end;
  color: #2c2c2c;
  > span:first-child {
    margin-top: 6px;
  }
  @media (max-width: 714px) {
    justify-content: flex-start;
  }
`;

export const SavingSection = styled.div`
  label: SavingSection;
  color: #b10a0a;
  display: flex;
  flex-wrap: nowrap;
  font-size: 18px;
  justify-content: flex-end;
  > div:first-child {
    margin-top: 5px;
  }
  @media (max-width: 714px) {
    justify-content: flex-start;
  }
`;

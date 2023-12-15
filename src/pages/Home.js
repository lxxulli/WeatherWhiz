import {
  faDroplet,
  faMagnifyingGlass,
  faTemperatureHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { imgIcon, weatherApi } from "../api";

const Wrap = styled.div`
  height: 100vh;
  background: linear-gradient(
    54deg,
    rgba(255, 213, 223, 1) 0%,
    rgba(255, 253, 209, 1) 50%,
    rgba(209, 250, 255, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  max-width: 80%;
  width: 100%;
  height: 80%;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 3px 32px 0 rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 50px;
  display: flex;
`;
const MainScreen = styled.div`
  width: 30%;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50px;
  padding: 30px;
`;
const Form = styled.form`
  height: 70px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50px;
  font-size: 25px;
`;
const SearchIcon = styled.div`
  margin-left: 30px;
`;
const Input = styled.input`
  all: unset;
  width: 80%;
  height: 100%;
  margin-left: 20px;
`;
const WeatherIcon = styled.div``;
const Location = styled.div``;
const CurrentTemp = styled.div``;
const TimeWrap = styled.div``;
const Day = styled.div``;
const Hour = styled.div``;
const ConWrap = styled.div``;
const Temp = styled.div``;
const Text = styled.div``;
const TempIcon = styled.div``;
const TempRes = styled.div``;
const SubText = styled.div``;
const Hum = styled.div``;
const HumIcon = styled.div``;
const HumRes = styled.div``;

const SubScreen = styled.div``;

export const Home = () => {
  const [weatherData, setWeatherData] = useState();
  const [iconData, setIconData] = useState();

  useEffect(() => {
    (async () => {
      const data = await weatherApi();
      setWeatherData(data);
      const result = await imgIcon();
      console.log(data);
    })();
  }, []);

  return (
    <Wrap>
      <Container>
        <MainScreen>
          <Form>
            <SearchIcon>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </SearchIcon>
            <Input />
          </Form>
          <WeatherIcon>{}</WeatherIcon>
          <Location></Location>
          <CurrentTemp></CurrentTemp>
          <TimeWrap>
            <Day></Day>
            <Hour></Hour>
          </TimeWrap>
          <ConWrap>
            <Temp>
              <Text>
                <h4>온도</h4>
                <TempIcon>
                  <FontAwesomeIcon icon={faTemperatureHigh} />
                </TempIcon>
              </Text>
              <TempRes></TempRes>
              <SubText>
                <p>최저</p>
                <p>최고</p>
              </SubText>
            </Temp>
            <Hum>
              <Text>
                <h4>습도</h4>
                <HumIcon>
                  <FontAwesomeIcon icon={faDroplet} />
                </HumIcon>
              </Text>
              <HumRes></HumRes>
              <SubText>
                <p>현재 이슬점은 12º입니다.</p>
              </SubText>
            </Hum>
          </ConWrap>
        </MainScreen>

        <SubScreen></SubScreen>
      </Container>
    </Wrap>
  );
};

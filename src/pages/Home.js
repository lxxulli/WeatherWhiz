import {
  faDroplet,
  faMagnifyingGlass,
  faTemperatureHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { imgIcon, weatherApi } from "../api";
import { Loading } from "../components/Loading";

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
  height: 50px;
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
const TopWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  font-weight: 300;
`;
const WeatherIcon = styled.div`
  background-color: lightgray;
  margin: 20px 0;
  padding: 100px;
`;
const Location = styled.h4``;
const CurrentTemp = styled.h2`
  font-size: 50px;
  font-weight: 700;
  margin: 10px 0;
`;
const TimeWrap = styled.div`
  display: flex;
`;
const Day = styled.h4`
  margin-right: 10px;
`;
const Hour = styled.h4``;
const ConWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  li {
    width: 46%;
    height: 150px;
    padding: 15px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
const Text = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SubText = styled.div``;
const TempIcon = styled.div``;
const TempRes = styled.div``;
const HumIcon = styled.div``;
const HumRes = styled.div``;

const SubScreen = styled.div``;

export const Home = () => {
  const [weatherData, setWeatherData] = useState();
  const [iconData, setIconData] = useState();
  const [isloading, setIsloading] = useState(true);
  const [dayData, setDayData] = useState();
  const [timeData, setTimeData] = useState();

  const now = new Date();
  const day = String(now.getDay());
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayResult = week[day];
  const hours = String(now.getHours());

  useEffect(() => {
    (async () => {
      const data = await weatherApi();
      setWeatherData(data);
      setDayData(`${dayResult}요일`);
      setTimeData(`${hours}:00`);

      setIsloading(false);
      console.log(data);
    })();
  }, [hours, dayResult]);

  const icon = weatherData?.weather[0]?.icon;
  const tempMax = weatherData?.main?.temp_max;
  const tempMin = weatherData?.main?.temp_min;
  const tempCalc = tempMax - tempMin;

  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <Wrap>
          <Container>
            <MainScreen>
              <Form>
                <SearchIcon>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </SearchIcon>
                <Input />
              </Form>
              <TopWrap>
                <WeatherIcon>{icon}</WeatherIcon>
                <Location>부산광역시</Location>
                <CurrentTemp>{weatherData?.main?.temp}º</CurrentTemp>
                <TimeWrap>
                  <Day>{dayData},</Day>
                  <Hour>{timeData}</Hour>
                </TimeWrap>
              </TopWrap>
              <ConWrap>
                <li>
                  <Text>
                    <h4>온도</h4>
                    <TempIcon>
                      <FontAwesomeIcon icon={faTemperatureHigh} />
                    </TempIcon>
                  </Text>
                  <TempRes>{tempCalc}</TempRes>
                  <SubText>
                    <p>최고{tempMax}</p>
                    <p>최저{tempMin}</p>
                  </SubText>
                </li>
                <li>
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
                </li>
              </ConWrap>
            </MainScreen>

            <SubScreen></SubScreen>
          </Container>
        </Wrap>
      )}
    </>
  );
};

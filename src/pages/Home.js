import {
  faDroplet,
  faMagnifyingGlass,
  faMoon,
  faTemperatureHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { weatherApi, forecastData } from "../api";
import { Loading } from "../components/Loading";
import { mainColors } from "../style/GlobalStyle";
import {
  faCalendarCheck,
  faCalendarDays,
  faClock,
} from "@fortawesome/free-regular-svg-icons";

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
  height: 85%;
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
  padding: 30px;
  border-radius: 50px 0 0 50px;
`;
const Form = styled.form`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 30px;
  font-size: 25px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
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
const MainTxtWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 30px;
`;
const WeatherIcon = styled.div`
  margin: 20px 0;
  img {
    width: 240px;
  }
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
  margin-bottom: 20px;
  li {
    width: 47%;
    height: 185px;
    padding: 15px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;
const Con = styled.div`
  width: 100%;
  height: 185px;
  padding: 15px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
`;
const Text = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgba(27, 27, 27, 0.5);
`;
const SubText = styled.div`
  color: rgba(27, 27, 27, 0.5);
`;
const TempIcon = styled.div``;
const Res = styled.h3`
  font-size: 30px;
  color: ${mainColors.blackColor};
`;
const HumIcon = styled.div``;
// main Screen

const SubScreen = styled.div`
  width: 70%;
  padding: 30px;
  position: relative;
`;
const ModeSwitch = styled.div`
  width: 100px;
  height: 50px;
  display: block;
  position: absolute;
  right: 3%;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  font-size: 20px;
`;
const Btnicon = styled.div`
  position: absolute;
  top: 50%;
  right: 17px;
  transform: translateY(-50%);
  color: #ffef92;
  font-size: 20px;
`;
const ToggleBtn = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: #e0e0e0;
`;
const Top = styled.div``;
const DayWeather = styled.div`
  width: 100%;
  margin-top: 15px;
`;
const Title = styled.div`
  display: flex;
  font-size: 20px;
  h4 {
    margin-left: 10px;
  }
`;
const BoxWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`;
const Box = styled.div`
  width: 19%;
  height: 250px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Bottom = styled.div``;
const TodayWrap = styled.div``;

export const Home = () => {
  const [weatherData, setWeatherData] = useState();
  const [isloading, setIsloading] = useState(true);
  const [dayData, setDayData] = useState();
  const [timeData, setTimeData] = useState();
  const [fcData, setFcData] = useState();

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
      const res = await forecastData();
      console.log(res);

      setIsloading(false);
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
              <MainTxtWrap>
                <WeatherIcon>
                  <img
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt=""
                  />
                </WeatherIcon>
                <Location>부산광역시</Location>
                <CurrentTemp>
                  {Math.round(weatherData?.main?.temp)}º
                </CurrentTemp>
                <TimeWrap>
                  <Day>{dayData},</Day>
                  <Hour>{timeData}</Hour>
                </TimeWrap>
              </MainTxtWrap>
              <ConWrap>
                <li>
                  <Text>
                    <h4>온도</h4>
                    <TempIcon>
                      <FontAwesomeIcon icon={faTemperatureHigh} />
                    </TempIcon>
                  </Text>
                  <Res>{Math.round(tempCalc)}º</Res>
                  <SubText>
                    <p>최고 : {Math.round(tempMax)}º</p>
                    <p>최저 : {Math.round(tempMin)}º</p>
                  </SubText>
                </li>
                <li>
                  <Text>
                    <h4>습도</h4>
                    <HumIcon>
                      <FontAwesomeIcon icon={faDroplet} />
                    </HumIcon>
                  </Text>
                  <Res>{weatherData?.main?.humidity}%</Res>
                  <SubText>
                    <p>현재 이슬점은 12º입니다.</p>
                  </SubText>
                </li>
              </ConWrap>
              <ConWrap>
                <Con>
                  <Text>
                    <h4>시간별 기온</h4>
                    <HumIcon>
                      <FontAwesomeIcon icon={faClock} />
                    </HumIcon>
                  </Text>
                </Con>
              </ConWrap>
            </MainScreen>

            <SubScreen>
              <ModeSwitch>
                <ToggleBtn></ToggleBtn>
                <Btnicon>
                  <FontAwesomeIcon icon={faMoon} />
                </Btnicon>
              </ModeSwitch>
              <Top>
                <DayWeather>
                  <Title>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <h4>5일간 일기예보</h4>
                  </Title>
                  <BoxWrap>
                    <Box>
                      <li>day</li>
                      <li>이미지</li>
                      <li>최고</li>
                      <li>최저</li>
                    </Box>
                    <Box>
                      <li>day</li>
                      <li>이미지</li>
                      <li>최고</li>
                      <li>최저</li>
                    </Box>
                    <Box>
                      <li>day</li>
                      <li>이미지</li>
                      <li>최고</li>
                      <li>최저</li>
                    </Box>
                    <Box>
                      <li>day</li>
                      <li>이미지</li>
                      <li>최고</li>
                      <li>최저</li>
                    </Box>
                    <Box>
                      <li>day</li>
                      <li>이미지</li>
                      <li>최고</li>
                      <li>최저</li>
                    </Box>
                  </BoxWrap>
                </DayWeather>
              </Top>
              <Bottom>
                <Title>
                  <FontAwesomeIcon icon={faCalendarCheck} />
                  <h4>오늘의 날씨 정보</h4>
                </Title>
                <TodayWrap>
                  <li>강수량</li>
                  <li>기압</li>
                  <li>가시성</li>
                  <li>바람</li>
                  <li>흐림</li>
                  <li>일출</li>
                  <li>대기오염</li>
                </TodayWrap>
              </Bottom>
            </SubScreen>
          </Container>
        </Wrap>
      )}
    </>
  );
};

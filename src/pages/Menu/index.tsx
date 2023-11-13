import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, List, Text } from "components";

const MenuPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat flex flex-col font-roboto h-[900px] items-center justify-start mx-auto p-[70px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="flex flex-col items-center justify-start max-w-[1299px] mb-[114px] mt-2.5 mx-auto w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[65px] grid sm:grid-cols-1 grid-cols-2 w-[48%] md:w-full"
              orientation="horizontal"
            >
              <div
                className="common-pointer bg-blue_gray-800_7e flex flex-col gap-[11px] items-center justify-end sm:ml-[0] pt-[15px] rounded-[10px] w-full"
                onClick={() => navigate("/royhatgaolishfive")}
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[136px] items-center justify-start p-1.5 w-[85%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group673.png')" }}
                >
                  <div className="h-[110px] md:h-[122px] mb-3 relative w-4/5">
                    <Img
                      className="h-[110px] m-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                      src="images/img_global1_110x174.png"
                      alt="globalOne"
                    />
                    <Text
                      className="absolute h-max inset-[0] justify-center m-auto sm:text-[27px] md:text-[29px] text-[31px] text-center text-white-A700 w-max"
                      size="txtRobotoMedium31"
                    >
                      DIREKTOR
                    </Text>
                  </div>
                </div>
                <div className="bg-red-300 h-5 rotate-[90deg] w-full"></div>
              </div>
              <div
                className="common-pointer bg-blue_gray-800_7e flex flex-col gap-[11px] items-center justify-end sm:ml-[0] pt-[15px] rounded-[10px] w-full"
                onClick={() => navigate("/royhatgaolish")}
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[136px] items-center justify-start p-1.5 w-[85%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group673.png')" }}
                >
                  <div className="h-[110px] md:h-[122px] mb-3 relative w-4/5">
                    <Img
                      className="h-[110px] m-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                      src="images/img_global1_110x174.png"
                      alt="globalOne"
                    />
                    <Text
                      className="absolute h-max inset-[0] justify-center m-auto sm:text-[27px] md:text-[29px] text-[31px] text-center text-white-A700"
                      size="txtRobotoMedium31"
                    >
                      <>
                        SHOW
                        <br />
                        ROOM
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-red-300 h-5 rotate-[90deg] w-full"></div>
              </div>
            </List>
            <div className="bg-blue_gray-800_7e flex md:flex-1 flex-col gap-5 items-center justify-end pt-[21px] rounded-[10px] w-[22%] md:w-full">
              <div className="md:h-[114px] h-[121px] relative w-[48%]">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[66%]">
                  <div
                    className="bg-cover bg-no-repeat md:h-[114px] h-[121px] p-0.5 relative shadow-bs5 w-full"
                    style={{
                      backgroundImage: "url('images/img_flatipad.svg')",
                    }}
                  >
                    <Img
                      className="absolute h-[114px] inset-[0] justify-center m-auto"
                      src="images/img_homespeaker.svg"
                      alt="homespeaker"
                    />
                    <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto rounded-[1px] w-[89%]">
                      <Img
                        className="h-[103px] md:h-auto object-cover rounded-[1px] w-full"
                        src="images/img_global1_103x77.png"
                        alt="globalOne"
                      />
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute inset-x-[0] mx-auto sm:text-[27px] md:text-[29px] text-[31px] text-center text-white-A700 top-[28%] w-max"
                  size="txtRobotoMedium31"
                >
                  <>O\&#96;LCHOV</>
                </Text>
              </div>
              <div className="bg-red-300 h-5 rotate-[90deg] w-full"></div>
            </div>
            <div className="bg-blue_gray-800_7e flex md:flex-1 flex-col gap-[11px] items-center justify-end pt-[15px] rounded-[10px] w-[22%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[136px] items-center justify-start p-1.5 w-[85%] md:w-full"
                style={{ backgroundImage: "url('images/img_group673.png')" }}
              >
                <div className="h-[110px] md:h-[122px] mb-3 relative w-4/5">
                  <Img
                    className="h-[110px] m-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_global1_110x174.png"
                    alt="globalOne_One"
                  />
                  <Text
                    className="absolute h-max inset-[0] justify-center m-auto sm:text-[27px] md:text-[29px] text-[31px] text-center text-white-A700 w-max"
                    size="txtRobotoMedium31"
                  >
                    SOTUV
                  </Text>
                </div>
              </div>
              <div className="bg-red-300 h-5 rotate-[90deg] w-full"></div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[38px] w-full">
            <div
              className="common-pointer bg-blue_gray-800_7e flex md:flex-1 flex-col gap-[11px] items-center justify-end pt-[15px] rounded-[10px] w-[22%] md:w-full"
              onClick={() => navigate("/royhatgaolishthree")}
            >
              <div
                className="bg-cover bg-no-repeat md:h-[110px] h-[136px] p-1.5 relative w-[85%]"
                style={{ backgroundImage: "url('images/img_group673.png')" }}
              >
                <Img
                  className="absolute h-[110px] inset-x-[0] mx-auto object-cover rounded-tl-[10px] rounded-tr-[10px] top-[4%] w-3/4"
                  src="images/img_global1_110x174.png"
                  alt="globalOne_Two"
                />
                <Text
                  className="absolute right-[7%] sm:text-[27px] md:text-[29px] text-[31px] text-white-A700 top-[10%]"
                  size="txtRobotoMedium31"
                >
                  <>
                    OMBOR &<br />
                    BICHUV
                  </>
                </Text>
              </div>
              <div className="bg-red-300 h-5 rotate-[90deg] w-full"></div>
            </div>
            <div className="bg-blue_gray-800_7e flex md:flex-1 flex-col gap-5 items-center justify-end pt-[21px] rounded-[10px] w-[22%] md:w-full">
              <div className="md:h-[114px] h-[121px] relative w-1/2">
                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[16%] w-[64%]">
                  <div
                    className="bg-cover bg-no-repeat md:h-[114px] h-[121px] p-0.5 relative shadow-bs5 w-full"
                    style={{
                      backgroundImage: "url('images/img_flatipad.svg')",
                    }}
                  >
                    <Img
                      className="absolute h-[114px] inset-[0] justify-center m-auto"
                      src="images/img_homespeaker.svg"
                      alt="homespeaker_One"
                    />
                    <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto rounded-[1px] w-[89%]">
                      <Img
                        className="h-[103px] md:h-auto object-cover rounded-[1px] w-full"
                        src="images/img_global1_103x77.png"
                        alt="globalOne_Three"
                      />
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute inset-x-[0] mx-auto sm:text-[27px] md:text-[29px] text-[31px] text-center text-white-A700 top-[28%] w-max"
                  size="txtRobotoMedium31"
                >
                  TAMINOT
                </Text>
              </div>
              <div className="bg-red-300 h-5 rotate-[90deg] w-full"></div>
            </div>
            <div className="bg-blue_gray-800_7e flex md:flex-1 flex-col gap-[11px] items-center justify-end pt-[15px] rounded-[10px] w-[22%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[136px] items-center justify-start p-1.5 w-[85%] md:w-full"
                style={{ backgroundImage: "url('images/img_group673.png')" }}
              >
                <div className="h-[110px] md:h-[122px] mb-3 relative w-4/5">
                  <Img
                    className="h-[110px] m-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_global1_110x174.png"
                    alt="globalOne_Four"
                  />
                  <Text
                    className="absolute h-max inset-[0] justify-center m-auto sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700 w-max"
                    size="txtRobotoMedium28WhiteA700"
                  >
                    OYNA
                  </Text>
                </div>
              </div>
              <div className="bg-red-300 h-5 rotate-[90deg] w-full"></div>
            </div>
            <div className="bg-blue_gray-800_7e flex md:flex-1 flex-col gap-5 items-center justify-end pt-[21px] rounded-[10px] w-[22%] md:w-full">
              <div className="md:h-[114px] h-[121px] relative w-[45%]">
                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[12%] w-[71%]">
                  <div
                    className="bg-cover bg-no-repeat md:h-[114px] h-[121px] p-0.5 relative shadow-bs5 w-full"
                    style={{
                      backgroundImage: "url('images/img_flatipad.svg')",
                    }}
                  >
                    <Img
                      className="absolute h-[114px] inset-[0] justify-center m-auto"
                      src="images/img_homespeaker.svg"
                      alt="homespeaker_Two"
                    />
                    <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto rounded-[1px] w-[89%]">
                      <Img
                        className="h-[103px] md:h-auto object-cover rounded-[1px] w-full"
                        src="images/img_global1_103x77.png"
                        alt="globalOne_Five"
                      />
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute inset-x-[0] mx-auto sm:text-[27px] md:text-[29px] text-[31px] text-center text-white-A700 top-[28%] w-max"
                  size="txtRobotoMedium31"
                >
                  MONTAJ
                </Text>
              </div>
              <div className="bg-red-300 h-5 rotate-[90deg] w-full"></div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 gap-16 items-center justify-center mt-[47px] w-[48%] md:w-full">
            <div className="bg-blue_gray-800_7e flex flex-col gap-5 items-center justify-end pt-[21px] rounded-[10px] w-[45%] sm:w-full">
              <div className="md:h-[114px] h-[121px] relative w-[38%]">
                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[5%] w-[84%]">
                  <div
                    className="bg-cover bg-no-repeat md:h-[114px] h-[121px] p-0.5 relative shadow-bs5 w-full"
                    style={{
                      backgroundImage: "url('images/img_flatipad.svg')",
                    }}
                  >
                    <Img
                      className="absolute h-[114px] inset-[0] justify-center m-auto"
                      src="images/img_homespeaker.svg"
                      alt="homespeaker_Three"
                    />
                    <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto rounded-[1px] w-[89%]">
                      <Img
                        className="h-[103px] md:h-auto object-cover rounded-[1px] w-full"
                        src="images/img_global1_103x77.png"
                        alt="globalOne_Six"
                      />
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute inset-x-[0] mx-auto sm:text-[27px] md:text-[29px] text-[31px] text-center text-white-A700 top-[28%] w-max"
                  size="txtRobotoMedium31"
                >
                  SERVIS
                </Text>
              </div>
              <div className="bg-red-300 h-5 rotate-[90deg] w-full"></div>
            </div>
            <div
              className="common-pointer bg-blue_gray-800_7e flex flex-col gap-[11px] items-center justify-end pt-[15px] rounded-[10px] w-[45%] sm:w-full"
              onClick={() => navigate("/royhatgaolishone")}
            >
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[136px] items-center justify-start p-1.5 w-[85%] md:w-full"
                style={{ backgroundImage: "url('images/img_group673.png')" }}
              >
                <div className="h-[110px] md:h-[122px] mb-3 relative w-4/5">
                  <Img
                    className="h-[110px] m-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_global1_110x174.png"
                    alt="globalOne_Seven"
                  />
                  <Text
                    className="absolute h-max inset-[0] justify-center m-auto sm:text-[27px] md:text-[29px] text-[31px] text-center text-white-A700 w-max"
                    size="txtRobotoMedium31"
                  >
                    MOLIYA
                  </Text>
                </div>
              </div>
              <div className="bg-red-300 h-5 rotate-[90deg] w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;

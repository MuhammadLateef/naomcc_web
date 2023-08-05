import React from "react";
import Image from "next/image";
const AboutUs = () => {
  return (
    <div className="pt-[100px] bg-white w-full">
      <div className="w-[90%] py-[50px] mx-auto flex md:flex-row flex-col justify-between items-center">
        <div className="md:w-[50%] w-[100%]">
          <h1 className="md:text-[30px] text-[20px] font-bold text-[#252C32]">
            National Association Of Muslim Charitable Clinics
          </h1>
          <Image
            width={90}
            height={20}
            src="/Assets/images/Home-images/svg/svg-line.svg"
            alt="img"
          />
          <p className="md:text-[16px] text-[14px] mt-[20px] text-[#18181B]">
            The National Association of Muslim Charitable Clinics (NAOMCC), an
            initiative of{" "}
            <a
              className="text-blue-500 hover:text-green-500"
              target="_blank"
              href="https://ibnsinafoundation.org/"
            >
              Ibn Sina Foundation,
            </a>{" "}
            a nationwide community-based, not-for-profit, voluntary membership
            association supporting to develop the Muslim charitable clinics
            operating in the country. The aim is to unite healthcare
            organizations and clinics to share common interests and collaborate
            in a concerted effort to uplift communities. It provides a wide
            range of support to member organizations through navigating various
            funding sources, education, training, advocacy efforts,
            collaboration, and work toward resource pooling to improve and
            expand quality service delivery.
          </p>
          <h3 className="md:text-[30px] font-bold text-[20px] mt-[16px] mb-[8px] text-[#252C32]">
            Vision
          </h3>
          <p className="text-[#18181B] md:text-[16px] text-[14px]">
            To bring excellence in the provision of charitable healthcare
          </p>
          <h3 className="md:text-[30px] font-bold text-[20px] mt-[16px] mb-[8px] text-[#252C32]">
            Mission
          </h3>
          <p className="text-[#18181B] md:text-[16px] text-[14px]">
            Further the capability of Muslim charitable clinics to provide the
            highest level of care to the communities they serve
          </p>
        </div>
        <div className="md:w-[40%] w-[75%]">
          <Image
            width={200}
            height={100}
            className="w-full"
            src="/Assets/images/ABoutUS/img1.png"
            alt="img"
          />
        </div>
      </div>
      <div className="bg-[#EEE]">
        <div className="w-[90%] mx-auto flex md:flex-row flex-col md:py-8 py-4 justify-start items-center">
          <div className="md:w-[35%] w-[70%] md:mr-[55px]">
            <Image
              width={200}
              height={100}
              className="w-full"
              src="/Assets/images/ABoutUS/img23.png"
              alt="img"
            />
          </div>
          <div className="md:w-[55%] w-[90%]">
            <h2 className="text-[#252C32] md:text-[30px] text-[20px] font-bold my-4">
              Objectives:
            </h2>
            <ul className="w-full list-disc text-[#18181B] md:text-[16px] font-normal text-[14px]">
              <li className="my-[10px]">
                To provide a platform where Muslim charitable clinics work
                towards achieving common and collective goals.
              </li>
              <li className="my-[10px]">
                To strengthen the ties between various Muslim charitable clinics
                to synergize and serve better in the communities.
              </li>
              <li className="my-[10px]">
                To work towards the development of each clinic/organization by
                exploring the resources available for the community.
              </li>
              <li className="my-[10px]">
                To provide strategic direction and support to the member
                organizations.
              </li>
              <li className="my-[10px]">
                To work towards securing grants and funding to work collectively
                on various projects and programs for community development.
              </li>
              <li className="my-[10px]">
                To work for the underserved, uninsured, immigrants, and
                underprivileged communities facing various health challenges.
              </li>
              <ul className="w-full list-disc text-[#18181B] md:text-[16px] font-normal text-[14px]">
                <li className="my-2">
                  To work towards strengthening the ties with local, state, and
                  federal level organizations to fund and support the programs
                  of the clinics/organizations.
                </li>
                <li className="my-2">
                  To work towards developing partnerships with other
                  organizations in areas of common interest.
                </li>
                <li className="my-2">
                  To work towards establishing new organizations and clinics in
                  response to the health needs of the communities.
                </li>
                <li className="my-2">
                  To tackle any other collective emerging/urgent matter/issue
                  related to Muslim charitable clinics in the country.
                </li>
              </ul>
            </ul>
          </div>
        </div>
        {/* <ul className='w-[90%] pb-4 mx-auto list-disc text-[#18181B] md:text-[16px] font-normal text-[14px]'>
                    <li className='my-2'>To work towards strengthening the ties with local, state, and federal level organizations to fund and support the programs of the clinics/organizations.</li>
                    <li className='my-2'>To work towards developing partnerships with other organizations in areas of common interest.</li>
                    <li className='my-2'>To work towards establishing new organizations and clinics in response to the health needs of the communities.</li>
                    <li className='my-2'>To tackle any other collective emerging/urgent matter/issue related to Muslim charitable clinics in the country.</li>
                </ul> */}
      </div>
      <div className="bg-white">
        <div className="w-[90%] mx-auto flex md:flex-row flex-col md:py-8 py-4 justify-start items-center">
          <div className="w-[100%]">
            <p className="md:text-[16px] text-[14px] mt-[20px] text-[#18181B]">
              The National Association of Muslim Charitable Clinics (NAOMCC) is
              a nationwide community-based, not-for-profit organization that
              aims to support and develop Muslim charitable clinics across the
              country. The primary goal of NAOMCC is to bring together
              healthcare organizations and clinics with shared interests,
              fostering collaboration to uplift communities.
            </p>
            <h2 className="text-[#252C32] md:text-[30px] text-[20px] font-bold my-4">
              The key functions of NAOMCC include:
            </h2>
            <ol className="w-full list-decimal text-[#18181B] md:text-[16px] font-normal text-[14px] pl-[30px]">
              <li className="my-[10px]">
                Uniting healthcare organizations: NAOMCC serves as a platform to
                unite various healthcare organizations and clinics with a common
                goal of providing charitable medical services to those in need
              </li>
              <li className="my-[10px]">
                Support for member organizations: The association offers a wide
                range of support services to its member organizations. This
                support can include assistance in navigating various funding
                sources, which helps member clinics maintain and expand their
                operations and services.
              </li>
              <li className="my-[10px]">
                Education and training: NAOMCC likely provides educational and
                training programs to enhance the capabilities of healthcare
                professionals working in member clinics. This ensures that the
                quality of service delivery remains high.
              </li>
              <li className="my-[10px]">
                Advocacy efforts: The association may engage in advocacy efforts
                to raise awareness about the importance of charitable medical
                services and to promote policies that benefit the communities
                they serve.
              </li>
              <li className="my-[10px]">
                Collaboration and resource pooling: NAOMCC encourages
                collaboration among its member organizations and other
                organizations working for community development. By pooling
                their resources, these clinics can collectively improve their
                efficiency and effectiveness in providing healthcare services to
                underserved populations
              </li>
              <li className="my-[10px]">
                6. Expanding quality service delivery: NAOMCC{"'"}s overall
                objective is to contribute to the improvement and expansion of
                quality healthcare services offered by Muslim charitable clinics
                nationwide.
              </li>
            </ol>
            <p>
              Through these initiatives, NAOMCC aims to make a positive impact
              on the communities it serves, particularly those who may have
              limited access to healthcare services due to financial constraints
              or other barriers. By supporting and empowering member clinics,
              the association strives to enhance the overall healthcare
              landscape in the country.
            </p>
          </div>
        </div>
      </div>
      {/* board of directors */}
      <div className="pt-[70px] pb-[30px] h-[100%] bg-[#EEE]">
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center">
          <div className="md:w-[25%] pb-10 w-[100%] flex flex-col items-center mx-auto">
            <h2 className="md:text-[30px] text-[23px] font-bold text-[#252C32]">
              Board
            </h2>
            <Image
              width={90}
              height={20}
              className="text-center"
              src="/Assets/images/Home-images/svg/svg-line.svg"
              alt="img"
            />
          </div>
          <div className="w-[90%] mx-auto flex justify-center flex-wrap">
            <div className="my-5 mx-2">
              <Image
                width={100}
                height={100}
                className="w-[250px]"
                src="/Assets/images/boardOfDirectors/Ruppani.png"
                alt="img"
              />
              <div>
                <h3 className="font-semibold py-2 text-[#444] capitalize md:text-[20px] text-[17px]">
                  Nasruddin Rupani
                </h3>
                <p className="md:text-[16px] text-[14px] font-semibold text-[#444] capitalize">
                  Chairman
                </p>
              </div>
            </div>
            <div className="my-5 mx-2">
              <Image
                width={100}
                height={100}
                className="w-[250px]"
                src="/Assets/images/boardOfDirectors/img3.png"
                alt="img"
              />
              <div>
                <h3 className="font-semibold py-2 text-[#444] capitalize md:text-[20px] text-[17px]">
                  Moien Butt, MD
                </h3>
                <p className="md:text-[16px] text-[14px] font-semibold text-[#444] capitalize">
                  Vice-Chair
                </p>
              </div>
            </div>
            <div className="my-5 mx-2">
              <Image
                width={100}
                height={100}
                className="w-[250px]"
                src="/Assets/images/boardOfDirectors/img4.png"
                alt="img"
              />
              <div>
                <h3 className="font-semibold py-2 text-[#444] capitalize md:text-[20px] text-[17px]">
                  Syed Kaleem Kazmi, MD
                </h3>
                <p className="md:text-[16px] text-[14px] font-semibold text-[#444] capitalize">
                  Director
                </p>
              </div>
            </div>
            <div className="my-5 mx-2">
              <Image
                width={100}
                height={100}
                className="w-[250px]"
                src="/Assets/images/boardOfDirectors/img5.png"
                alt="img"
              />
              <div>
                <h3 className="font-semibold py-2 text-[#444] capitalize md:text-[20px] text-[17px]">
                  Olasunkanmi Adeyinka, MD
                </h3>
                <p className="md:text-[16px] text-[14px] font-semibold text-[#444] capitalize">
                  Director
                </p>
              </div>
            </div>
            <div className="my-5 mx-2">
              <Image
                width={100}
                height={100}
                className="w-[250px]"
                src="/Assets/images/boardOfDirectors/img6.png"
                alt="img"
              />
              <div>
                <h3 className="font-semibold py-2 text-[#444] capitalize md:text-[20px] text-[17px]">
                  {" "}
                  Imran Chunawala, RN
                </h3>
                <p className="md:text-[16px] text-[14px] font-semibold text-[#444] capitalize">
                  Director
                </p>
              </div>
            </div>
            <div className="my-5 mx-2">
              <Image
                width={100}
                height={100}
                className="w-[250px]"
                src="/Assets/images/boardOfDirectors/img7.png"
                alt="img"
              />
              <div>
                <h3 className="font-semibold py-2 text-[#444] capitalize md:text-[20px] text-[17px]">
                  Mohamed Shalaby, MD
                </h3>
                <p className="md:text-[16px] text-[14px] font-semibold text-[#444] capitalize">
                  Director
                </p>
              </div>
            </div>
            <div className="my-5 mx-2">
              <Image
                width={100}
                height={100}
                className="w-[250px]"
                src="/Assets/images/boardOfDirectors/img8.png"
                alt="img"
              />
              <div>
                <h3 className="font-semibold py-2 text-[#444] capitalize md:text-[20px] text-[17px]">
                  {" "}
                  Imran Nathani, MD
                </h3>
                <p className="md:text-[16px] text-[14px] font-semibold text-[#444] capitalize">
                  Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

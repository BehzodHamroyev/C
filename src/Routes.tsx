import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const IshlabchiqarishsexiBrakmahsulotlarhisobiOne = React.lazy(
  () => import("pages/IshlabchiqarishsexiBrakmahsulotlarhisobiOne"),
);
const IshlabchiqarishsexiBrakmahsulotlarhisobiTwo = React.lazy(
  () => import("pages/IshlabchiqarishsexiBrakmahsulotlarhisobiTwo"),
);
const IshlabchiqarishsexiBrakmahsulotlarhisobi = React.lazy(
  () => import("pages/IshlabchiqarishsexiBrakmahsulotlarhisobi"),
);
const IshlabchiqarishsexiBrakmahsulotlarhisobiEight = React.lazy(
  () => import("pages/IshlabchiqarishsexiBrakmahsulotlarhisobiEight"),
);
const RoyhatgaolishFourteen = React.lazy(
  () => import("pages/RoyhatgaolishFourteen"),
);
const RoyhatgaolishEleven = React.lazy(
  () => import("pages/RoyhatgaolishEleven"),
);
const IshlabchiqarishsexiBrakmahsulotlarhisobiFive = React.lazy(
  () => import("pages/IshlabchiqarishsexiBrakmahsulotlarhisobiFive"),
);
const IshlabchiqarishsexiBrakmahsulotlarhisobiFour = React.lazy(
  () => import("pages/IshlabchiqarishsexiBrakmahsulotlarhisobiFour"),
);
const IshlabchiqarishsexiBrakmahsulotlarhisobiNine = React.lazy(
  () => import("pages/IshlabchiqarishsexiBrakmahsulotlarhisobiNine"),
);
const Ishlabchiqarishsexi = React.lazy(
  () => import("pages/Ishlabchiqarishsexi"),
);
const IshlabchiqarishsexiBrakmahsulotlarhisobiTen = React.lazy(
  () => import("pages/IshlabchiqarishsexiBrakmahsulotlarhisobiTen"),
);
const IshlabchiqarishsexiBrakmahsulotlarhisobiEleven = React.lazy(
  () => import("pages/IshlabchiqarishsexiBrakmahsulotlarhisobiEleven"),
);
const MoliyaHodimlarroyhatiThree = React.lazy(
  () => import("pages/MoliyaHodimlarroyhatiThree"),
);
const MoliyaHodimlarroyhatiTwo = React.lazy(
  () => import("pages/MoliyaHodimlarroyhatiTwo"),
);
const MoliyaHodimlarroyhatiNine = React.lazy(
  () => import("pages/MoliyaHodimlarroyhatiNine"),
);
const IshlabchiqarishsexiBrakmahsulotlarhisobiSix = React.lazy(
  () => import("pages/IshlabchiqarishsexiBrakmahsulotlarhisobiSix"),
);
const IshlabchiqarishsexiBrakmahsulotlarhisobiThree = React.lazy(
  () => import("pages/IshlabchiqarishsexiBrakmahsulotlarhisobiThree"),
);
const MoliyaHodimlarroyhatiOne = React.lazy(
  () => import("pages/MoliyaHodimlarroyhatiOne"),
);
const MoliyaHodimlarroyhatiFour = React.lazy(
  () => import("pages/MoliyaHodimlarroyhatiFour"),
);
const MoliyaHodimlarroyhatiSeven = React.lazy(
  () => import("pages/MoliyaHodimlarroyhatiSeven"),
);
const MoliyaHodimlarroyhatiEleven = React.lazy(
  () => import("pages/MoliyaHodimlarroyhatiEleven"),
);
const MoliyaHodimlarroyhatiTen = React.lazy(
  () => import("pages/MoliyaHodimlarroyhatiTen"),
);
const MoliyaHodimlarroyhatiEight = React.lazy(
  () => import("pages/MoliyaHodimlarroyhatiEight"),
);
const MoliyaHodimlarroyhatiFive = React.lazy(
  () => import("pages/MoliyaHodimlarroyhatiFive"),
);
const MoliyaHodimlarroyhati = React.lazy(
  () => import("pages/MoliyaHodimlarroyhati"),
);
const IshlabchiqarishsexiOne = React.lazy(
  () => import("pages/IshlabchiqarishsexiOne"),
);
const IshlabchiqarishsexiBrakmahsulotlarhisobiSeven = React.lazy(
  () => import("pages/IshlabchiqarishsexiBrakmahsulotlarhisobiSeven"),
);
const ShowroomMijozlarroyhatiOne = React.lazy(
  () => import("pages/ShowroomMijozlarroyhatiOne"),
);
const Savdobolimitolovtarixi = React.lazy(
  () => import("pages/Savdobolimitolovtarixi"),
);
const Savdobolimitolovhisobi = React.lazy(
  () => import("pages/Savdobolimitolovhisobi"),
);
const Savdobolimitolovqabuli = React.lazy(
  () => import("pages/Savdobolimitolovqabuli"),
);
const IshlabchiqarishsexiBuyurtmaqoldiqIDbuyurtmanomeri = React.lazy(
  () => import("pages/IshlabchiqarishsexiBuyurtmaqoldiqIDbuyurtmanomeri"),
);
const IshlabchiqarishsexiBuyurtmaqoldiqID = React.lazy(
  () => import("pages/IshlabchiqarishsexiBuyurtmaqoldiqID"),
);
const MoliyaHodimlarroyhatiSix = React.lazy(
  () => import("pages/MoliyaHodimlarroyhatiSix"),
);
const MoliyaBuyurtmagachiqimtarixidavomiOne = React.lazy(
  () => import("pages/MoliyaBuyurtmagachiqimtarixidavomiOne"),
);
const MoliyaBuyurtmagachiqimtarixiOne = React.lazy(
  () => import("pages/MoliyaBuyurtmagachiqimtarixiOne"),
);
const BuyurtmalarFour = React.lazy(() => import("pages/BuyurtmalarFour"));
const BuyurtmalarThree = React.lazy(() => import("pages/BuyurtmalarThree"));
const Savdobolimibuyurtmauchunzayavka = React.lazy(
  () => import("pages/Savdobolimibuyurtmauchunzayavka"),
);
const SavdobolimibuyurtmalarroyhatiOne = React.lazy(
  () => import("pages/SavdobolimibuyurtmalarroyhatiOne"),
);
const RoyhatgaolishThirteen = React.lazy(
  () => import("pages/RoyhatgaolishThirteen"),
);
const RoyhatgaolishTwelve = React.lazy(
  () => import("pages/RoyhatgaolishTwelve"),
);
const IshlabchiqarishsexiJoriybuyurtmalarThree = React.lazy(
  () => import("pages/IshlabchiqarishsexiJoriybuyurtmalarThree"),
);
const IshlabchiqarishsexiJoriybuyurtmalarTwo = React.lazy(
  () => import("pages/IshlabchiqarishsexiJoriybuyurtmalarTwo"),
);
const IshlabchiqarishsexiJoriybuyurtmalarOne = React.lazy(
  () => import("pages/IshlabchiqarishsexiJoriybuyurtmalarOne"),
);
const IshlabchiqarishsexiJoriybuyurtmalar = React.lazy(
  () => import("pages/IshlabchiqarishsexiJoriybuyurtmalar"),
);
const MoliyaValyutaayriboshlashtarixi = React.lazy(
  () => import("pages/MoliyaValyutaayriboshlashtarixi"),
);
const MoliyaValyutaayriboshlash = React.lazy(
  () => import("pages/MoliyaValyutaayriboshlash"),
);
const MoliyaChiqimtarixiTwelve = React.lazy(
  () => import("pages/MoliyaChiqimtarixiTwelve"),
);
const MoliyaChiqimtarixiThirteen = React.lazy(
  () => import("pages/MoliyaChiqimtarixiThirteen"),
);
const MoliyaChiqimtarixiEleven = React.lazy(
  () => import("pages/MoliyaChiqimtarixiEleven"),
);
const MoliyaChiqimtarixiFourteen = React.lazy(
  () => import("pages/MoliyaChiqimtarixiFourteen"),
);
const MoliyaChiqimtarixiFifteen = React.lazy(
  () => import("pages/MoliyaChiqimtarixiFifteen"),
);
const MoliyaChiqimtarixiOne = React.lazy(
  () => import("pages/MoliyaChiqimtarixiOne"),
);
const MoliyaChiqimtarixiThree = React.lazy(
  () => import("pages/MoliyaChiqimtarixiThree"),
);
const MoliyaChiqimtarixi = React.lazy(() => import("pages/MoliyaChiqimtarixi"));
const RoyhatgaolishTen = React.lazy(() => import("pages/RoyhatgaolishTen"));
const RoyhatgaolishNine = React.lazy(() => import("pages/RoyhatgaolishNine"));
const BuyurtmalarTwo = React.lazy(() => import("pages/BuyurtmalarTwo"));
const Buyurtmalar = React.lazy(() => import("pages/Buyurtmalar"));
const BuyurtmalarOne = React.lazy(() => import("pages/BuyurtmalarOne"));
const Savdobolimibuyurtmalarroyhati = React.lazy(
  () => import("pages/Savdobolimibuyurtmalarroyhati"),
);
const MoliyaShowroomdankirimtarixiOne = React.lazy(
  () => import("pages/MoliyaShowroomdankirimtarixiOne"),
);
const MoliyaShowroomdankirimtarixiTwo = React.lazy(
  () => import("pages/MoliyaShowroomdankirimtarixiTwo"),
);
const MoliyaKirimtarixiOne = React.lazy(
  () => import("pages/MoliyaKirimtarixiOne"),
);
const MoliyaBuyurtmagachiqimtarixidavomi = React.lazy(
  () => import("pages/MoliyaBuyurtmagachiqimtarixidavomi"),
);
const MoliyaBuyurtmagachiqimtarixi = React.lazy(
  () => import("pages/MoliyaBuyurtmagachiqimtarixi"),
);
const MoliyaChiqimtarixiFive = React.lazy(
  () => import("pages/MoliyaChiqimtarixiFive"),
);
const MoliyaChiqimtarixiTwo = React.lazy(
  () => import("pages/MoliyaChiqimtarixiTwo"),
);
const MoliyaChiqimtarixiNine = React.lazy(
  () => import("pages/MoliyaChiqimtarixiNine"),
);
const MoliyaChiqimtarixiSeven = React.lazy(
  () => import("pages/MoliyaChiqimtarixiSeven"),
);
const MoliyaChiqimtarixiFour = React.lazy(
  () => import("pages/MoliyaChiqimtarixiFour"),
);
const MoliyaChiqimtarixiSix = React.lazy(
  () => import("pages/MoliyaChiqimtarixiSix"),
);
const MoliyaChiqimtarixiTen = React.lazy(
  () => import("pages/MoliyaChiqimtarixiTen"),
);
const MoliyaChiqimtarixiEight = React.lazy(
  () => import("pages/MoliyaChiqimtarixiEight"),
);
const MoliyaKirimqilishSix = React.lazy(
  () => import("pages/MoliyaKirimqilishSix"),
);
const OmborQoldiqIdsiBuyurtmalarroyhatiOne = React.lazy(
  () => import("pages/OmborQoldiqIdsiBuyurtmalarroyhatiOne"),
);
const MoliyaKirimqilishTwo = React.lazy(
  () => import("pages/MoliyaKirimqilishTwo"),
);
const MoliyaKirimqilishEight = React.lazy(
  () => import("pages/MoliyaKirimqilishEight"),
);
const MoliyaKirimqilishSeven = React.lazy(
  () => import("pages/MoliyaKirimqilishSeven"),
);
const MoliyaKirimqilishThree = React.lazy(
  () => import("pages/MoliyaKirimqilishThree"),
);
const MoliyaKirimqilishFive = React.lazy(
  () => import("pages/MoliyaKirimqilishFive"),
);
const MoliyaKirimqilishOne = React.lazy(
  () => import("pages/MoliyaKirimqilishOne"),
);
const MoliyaKirimqilish = React.lazy(() => import("pages/MoliyaKirimqilish"));
const Showroomumumiytolovtarixi = React.lazy(
  () => import("pages/Showroomumumiytolovtarixi"),
);
const Showroomtolovqabulqilish = React.lazy(
  () => import("pages/Showroomtolovqabulqilish"),
);
const Showroomtolovlarhisobi = React.lazy(
  () => import("pages/Showroomtolovlarhisobi"),
);
const Kassa = React.lazy(() => import("pages/Kassa"));
const KassaTwo = React.lazy(() => import("pages/KassaTwo"));
const KassaOne = React.lazy(() => import("pages/KassaOne"));
const MoliyaShowroomdankirimtarixi = React.lazy(
  () => import("pages/MoliyaShowroomdankirimtarixi"),
);
const MoliyaKirimtarixi = React.lazy(() => import("pages/MoliyaKirimtarixi"));
const MoliyaKirimqilishFour = React.lazy(
  () => import("pages/MoliyaKirimqilishFour"),
);
const ShowroomRoyhatgaolish = React.lazy(
  () => import("pages/ShowroomRoyhatgaolish"),
);
const ShowroomMijozlarroyhati = React.lazy(
  () => import("pages/ShowroomMijozlarroyhati"),
);
const ShowroomBuyurtmalarstatusOne = React.lazy(
  () => import("pages/ShowroomBuyurtmalarstatusOne"),
);
const Plugin = React.lazy(() => import("pages/Plugin"));
const ShowroomBuyurtmalartarixi = React.lazy(
  () => import("pages/ShowroomBuyurtmalartarixi"),
);
const ShowroomIshlabchiqarishdaOne = React.lazy(
  () => import("pages/ShowroomIshlabchiqarishdaOne"),
);
const ShowroomIshlabchiqarishda = React.lazy(
  () => import("pages/ShowroomIshlabchiqarishda"),
);
const ShowroomBuyurtmayaratishTwo = React.lazy(
  () => import("pages/ShowroomBuyurtmayaratishTwo"),
);
const ShowroomBuyurtmayaratishThree = React.lazy(
  () => import("pages/ShowroomBuyurtmayaratishThree"),
);
const ShowroomBuyurtmayaratish = React.lazy(
  () => import("pages/ShowroomBuyurtmayaratish"),
);
const ShowroomBuyurtmayaratishOne = React.lazy(
  () => import("pages/ShowroomBuyurtmayaratishOne"),
);
const MoliyaKassa = React.lazy(() => import("pages/MoliyaKassa"));
const OmborChiqimtarixiBuyurtmalartarkibi = React.lazy(
  () => import("pages/OmborChiqimtarixiBuyurtmalartarkibi"),
);
const OmborChiqimtarixi = React.lazy(() => import("pages/OmborChiqimtarixi"));
const Ombormahsulotchiqimiaksesuar = React.lazy(
  () => import("pages/Ombormahsulotchiqimiaksesuar"),
);
const OmborMahsulotChiqimiprofillar = React.lazy(
  () => import("pages/OmborMahsulotChiqimiprofillar"),
);
const RoyhatgaolishEight = React.lazy(() => import("pages/RoyhatgaolishEight"));
const RoyhatgaolishOne = React.lazy(() => import("pages/RoyhatgaolishOne"));
const MoliyaDashboard = React.lazy(() => import("pages/MoliyaDashboard"));
const ShowroomDashboard = React.lazy(() => import("pages/ShowroomDashboard"));
const RoyhatgaolishSix = React.lazy(() => import("pages/RoyhatgaolishSix"));
const Royhatgaolish = React.lazy(() => import("pages/Royhatgaolish"));
const RoyhatgaolishSeven = React.lazy(() => import("pages/RoyhatgaolishSeven"));
const DirektorDashboard = React.lazy(() => import("pages/DirektorDashboard"));
const RoyhatgaolishTwo = React.lazy(() => import("pages/RoyhatgaolishTwo"));
const RoyhatgaolishFive = React.lazy(() => import("pages/RoyhatgaolishFive"));
const OmborMahsulotlarombori = React.lazy(
  () => import("pages/OmborMahsulotlarombori"),
);
const OmborMahsulotlaromboriOne = React.lazy(
  () => import("pages/OmborMahsulotlaromboriOne"),
);
const OmborQabultarixiBuyurtmalarroyhatiThree = React.lazy(
  () => import("pages/OmborQabultarixiBuyurtmalarroyhatiThree"),
);
const OmborQabultarixiBuyurtmalarroyhatiTwo = React.lazy(
  () => import("pages/OmborQabultarixiBuyurtmalarroyhatiTwo"),
);
const OmborQabultarixiBuyurtmalarroyhatiOne = React.lazy(
  () => import("pages/OmborQabultarixiBuyurtmalarroyhatiOne"),
);
const OmborQabultarixiBuyurtmalarroyhati = React.lazy(
  () => import("pages/OmborQabultarixiBuyurtmalarroyhati"),
);
const OmborQabultarixiBuyurtmalartarkibi = React.lazy(
  () => import("pages/OmborQabultarixiBuyurtmalartarkibi"),
);
const OmborMahsulotqabuliAksesuar = React.lazy(
  () => import("pages/OmborMahsulotqabuliAksesuar"),
);
const OmborMahsulotqabuliprofil = React.lazy(
  () => import("pages/OmborMahsulotqabuliprofil"),
);
const OmborQoldiqIdsiBuyurtmalarroyhati = React.lazy(
  () => import("pages/OmborQoldiqIdsiBuyurtmalarroyhati"),
);
const OmborQoldiqIdsi = React.lazy(() => import("pages/OmborQoldiqIdsi"));
const FrameFiftyTwo = React.lazy(() => import("pages/FrameFiftyTwo"));
const FrameForty = React.lazy(() => import("pages/FrameForty"));
const Menu = React.lazy(() => import("pages/Menu"));
const OmborBuyurtmalarroyhatiOne = React.lazy(
  () => import("pages/OmborBuyurtmalarroyhatiOne"),
);
const OmborTaminotchigazayavka = React.lazy(
  () => import("pages/OmborTaminotchigazayavka"),
);
const OmborTaminotchigazayavkaOne = React.lazy(
  () => import("pages/OmborTaminotchigazayavkaOne"),
);
const OmborBuyurtmalarroyhatiThree = React.lazy(
  () => import("pages/OmborBuyurtmalarroyhatiThree"),
);
const OmborBuyurtmalarroyhati = React.lazy(
  () => import("pages/OmborBuyurtmalarroyhati"),
);
const OmborBichishvarenderFourteen = React.lazy(
  () => import("pages/OmborBichishvarenderFourteen"),
);
const OmborBichishvarenderThirteen = React.lazy(
  () => import("pages/OmborBichishvarenderThirteen"),
);
const OmborBichishvarenderTwelve = React.lazy(
  () => import("pages/OmborBichishvarenderTwelve"),
);
const RoyhatgaolishFour = React.lazy(() => import("pages/RoyhatgaolishFour"));
const RoyhatgaolishThree = React.lazy(() => import("pages/RoyhatgaolishThree"));
const OmborBuyurtmalarroyhatiFour = React.lazy(
  () => import("pages/OmborBuyurtmalarroyhatiFour"),
);
const OmborBuyurtmalarroyhatiTwo = React.lazy(
  () => import("pages/OmborBuyurtmalarroyhatiTwo"),
);
const OmborBichishvarenderEleven = React.lazy(
  () => import("pages/OmborBichishvarenderEleven"),
);
const OmborBichishvarenderTen = React.lazy(
  () => import("pages/OmborBichishvarenderTen"),
);
const OmborBichishvarenderNine = React.lazy(
  () => import("pages/OmborBichishvarenderNine"),
);
const OmborBichishvarenderTwo = React.lazy(
  () => import("pages/OmborBichishvarenderTwo"),
);
const OmborBichishvarenderThree = React.lazy(
  () => import("pages/OmborBichishvarenderThree"),
);
const OmborBichishvarender = React.lazy(
  () => import("pages/OmborBichishvarender"),
);
const OmborBichishvarenderFour = React.lazy(
  () => import("pages/OmborBichishvarenderFour"),
);
const ShowroomBuyurtmalarstatus = React.lazy(
  () => import("pages/ShowroomBuyurtmalarstatus"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<ShowroomBuyurtmalarstatus />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/omborbichishvarenderfour"
            element={<OmborBichishvarenderFour />}
          />
          <Route
            path="/omborbichishvarender"
            element={<OmborBichishvarender />}
          />
          <Route
            path="/omborbichishvarenderthree"
            element={<OmborBichishvarenderThree />}
          />
          <Route
            path="/omborbichishvarendertwo"
            element={<OmborBichishvarenderTwo />}
          />
          <Route
            path="/omborbichishvarendernine"
            element={<OmborBichishvarenderNine />}
          />
          <Route
            path="/omborbichishvarenderten"
            element={<OmborBichishvarenderTen />}
          />
          <Route
            path="/omborbichishvarendereleven"
            element={<OmborBichishvarenderEleven />}
          />
          <Route
            path="/omborbuyurtmalarroyhatitwo"
            element={<OmborBuyurtmalarroyhatiTwo />}
          />
          <Route
            path="/omborbuyurtmalarroyhatifour"
            element={<OmborBuyurtmalarroyhatiFour />}
          />
          <Route path="/royhatgaolishthree" element={<RoyhatgaolishThree />} />
          <Route path="/royhatgaolishfour" element={<RoyhatgaolishFour />} />
          <Route
            path="/omborbichishvarendertwelve"
            element={<OmborBichishvarenderTwelve />}
          />
          <Route
            path="/omborbichishvarenderthirteen"
            element={<OmborBichishvarenderThirteen />}
          />
          <Route
            path="/omborbichishvarenderfourteen"
            element={<OmborBichishvarenderFourteen />}
          />
          <Route
            path="/omborbuyurtmalarroyhati"
            element={<OmborBuyurtmalarroyhati />}
          />
          <Route
            path="/omborbuyurtmalarroyhatithree"
            element={<OmborBuyurtmalarroyhatiThree />}
          />
          <Route
            path="/ombortaminotchigazayavkaone"
            element={<OmborTaminotchigazayavkaOne />}
          />
          <Route
            path="/ombortaminotchigazayavka"
            element={<OmborTaminotchigazayavka />}
          />
          <Route
            path="/omborbuyurtmalarroyhatione"
            element={<OmborBuyurtmalarroyhatiOne />}
          />
          <Route path="/menu" element={<Menu />} />
          <Route path="/frameforty" element={<FrameForty />} />
          <Route path="/framefiftytwo" element={<FrameFiftyTwo />} />
          <Route path="/omborqoldiqidsi" element={<OmborQoldiqIdsi />} />
          <Route
            path="/omborqoldiqidsibuyurtmalarroyhati"
            element={<OmborQoldiqIdsiBuyurtmalarroyhati />}
          />
          <Route
            path="/ombormahsulotqabuliprofil"
            element={<OmborMahsulotqabuliprofil />}
          />
          <Route
            path="/ombormahsulotqabuliaksesuar"
            element={<OmborMahsulotqabuliAksesuar />}
          />
          <Route
            path="/omborqabultarixibuyurtmalartarkibi"
            element={<OmborQabultarixiBuyurtmalartarkibi />}
          />
          <Route
            path="/omborqabultarixibuyurtmalarroyhati"
            element={<OmborQabultarixiBuyurtmalarroyhati />}
          />
          <Route
            path="/omborqabultarixibuyurtmalarroyhatione"
            element={<OmborQabultarixiBuyurtmalarroyhatiOne />}
          />
          <Route
            path="/omborqabultarixibuyurtmalarroyhatitwo"
            element={<OmborQabultarixiBuyurtmalarroyhatiTwo />}
          />
          <Route
            path="/omborqabultarixibuyurtmalarroyhatithree"
            element={<OmborQabultarixiBuyurtmalarroyhatiThree />}
          />
          <Route
            path="/ombormahsulotlaromborione"
            element={<OmborMahsulotlaromboriOne />}
          />
          <Route
            path="/ombormahsulotlarombori"
            element={<OmborMahsulotlarombori />}
          />
          <Route path="/royhatgaolishfive" element={<RoyhatgaolishFive />} />
          <Route path="/royhatgaolishtwo" element={<RoyhatgaolishTwo />} />
          <Route path="/direktordashboard" element={<DirektorDashboard />} />
          <Route path="/royhatgaolishseven" element={<RoyhatgaolishSeven />} />
          <Route path="/royhatgaolish" element={<Royhatgaolish />} />
          <Route path="/royhatgaolishsix" element={<RoyhatgaolishSix />} />
          <Route path="/showroomdashboard" element={<ShowroomDashboard />} />
          <Route path="/moliyadashboard" element={<MoliyaDashboard />} />
          <Route path="/royhatgaolishone" element={<RoyhatgaolishOne />} />
          <Route path="/royhatgaolisheight" element={<RoyhatgaolishEight />} />
          <Route
            path="/ombormahsulotchiqimiprofillar"
            element={<OmborMahsulotChiqimiprofillar />}
          />
          <Route
            path="/ombormahsulotchiqimiaksesuar"
            element={<Ombormahsulotchiqimiaksesuar />}
          />
          <Route path="/omborchiqimtarixi" element={<OmborChiqimtarixi />} />
          <Route
            path="/omborchiqimtarixibuyurtmalartarkibi"
            element={<OmborChiqimtarixiBuyurtmalartarkibi />}
          />
          <Route path="/moliyakassa" element={<MoliyaKassa />} />
          <Route
            path="/showroombuyurtmayaratishone"
            element={<ShowroomBuyurtmayaratishOne />}
          />
          <Route
            path="/showroombuyurtmayaratish"
            element={<ShowroomBuyurtmayaratish />}
          />
          <Route
            path="/showroombuyurtmayaratishthree"
            element={<ShowroomBuyurtmayaratishThree />}
          />
          <Route
            path="/showroombuyurtmayaratishtwo"
            element={<ShowroomBuyurtmayaratishTwo />}
          />
          <Route
            path="/showroomishlabchiqarishda"
            element={<ShowroomIshlabchiqarishda />}
          />
          <Route
            path="/showroomishlabchiqarishdaone"
            element={<ShowroomIshlabchiqarishdaOne />}
          />
          <Route
            path="/showroombuyurtmalartarixi"
            element={<ShowroomBuyurtmalartarixi />}
          />
          <Route path="/plugin" element={<Plugin />} />
          <Route
            path="/showroombuyurtmalarstatusone"
            element={<ShowroomBuyurtmalarstatusOne />}
          />
          <Route
            path="/showroommijozlarroyhati"
            element={<ShowroomMijozlarroyhati />}
          />
          <Route
            path="/showroomroyhatgaolish"
            element={<ShowroomRoyhatgaolish />}
          />
          <Route
            path="/moliyakirimqilishfour"
            element={<MoliyaKirimqilishFour />}
          />
          <Route path="/moliyakirimtarixi" element={<MoliyaKirimtarixi />} />
          <Route
            path="/moliyashowroomdankirimtarixi"
            element={<MoliyaShowroomdankirimtarixi />}
          />
          <Route path="/kassaone" element={<KassaOne />} />
          <Route path="/kassatwo" element={<KassaTwo />} />
          <Route path="/kassa" element={<Kassa />} />
          <Route
            path="/showroomtolovlarhisobi"
            element={<Showroomtolovlarhisobi />}
          />
          <Route
            path="/showroomtolovqabulqilish"
            element={<Showroomtolovqabulqilish />}
          />
          <Route
            path="/showroomumumiytolovtarixi"
            element={<Showroomumumiytolovtarixi />}
          />
          <Route path="/moliyakirimqilish" element={<MoliyaKirimqilish />} />
          <Route
            path="/moliyakirimqilishone"
            element={<MoliyaKirimqilishOne />}
          />
          <Route
            path="/moliyakirimqilishfive"
            element={<MoliyaKirimqilishFive />}
          />
          <Route
            path="/moliyakirimqilishthree"
            element={<MoliyaKirimqilishThree />}
          />
          <Route
            path="/moliyakirimqilishseven"
            element={<MoliyaKirimqilishSeven />}
          />
          <Route
            path="/moliyakirimqilisheight"
            element={<MoliyaKirimqilishEight />}
          />
          <Route
            path="/moliyakirimqilishtwo"
            element={<MoliyaKirimqilishTwo />}
          />
          <Route
            path="/omborqoldiqidsibuyurtmalarroyhatione"
            element={<OmborQoldiqIdsiBuyurtmalarroyhatiOne />}
          />
          <Route
            path="/moliyakirimqilishsix"
            element={<MoliyaKirimqilishSix />}
          />
          <Route
            path="/moliyachiqimtarixieight"
            element={<MoliyaChiqimtarixiEight />}
          />
          <Route
            path="/moliyachiqimtarixiten"
            element={<MoliyaChiqimtarixiTen />}
          />
          <Route
            path="/moliyachiqimtarixisix"
            element={<MoliyaChiqimtarixiSix />}
          />
          <Route
            path="/moliyachiqimtarixifour"
            element={<MoliyaChiqimtarixiFour />}
          />
          <Route
            path="/moliyachiqimtarixiseven"
            element={<MoliyaChiqimtarixiSeven />}
          />
          <Route
            path="/moliyachiqimtarixinine"
            element={<MoliyaChiqimtarixiNine />}
          />
          <Route
            path="/moliyachiqimtarixitwo"
            element={<MoliyaChiqimtarixiTwo />}
          />
          <Route
            path="/moliyachiqimtarixifive"
            element={<MoliyaChiqimtarixiFive />}
          />
          <Route
            path="/moliyabuyurtmagachiqimtarixi"
            element={<MoliyaBuyurtmagachiqimtarixi />}
          />
          <Route
            path="/moliyabuyurtmagachiqimtarixidavomi"
            element={<MoliyaBuyurtmagachiqimtarixidavomi />}
          />
          <Route
            path="/moliyakirimtarixione"
            element={<MoliyaKirimtarixiOne />}
          />
          <Route
            path="/moliyashowroomdankirimtarixitwo"
            element={<MoliyaShowroomdankirimtarixiTwo />}
          />
          <Route
            path="/moliyashowroomdankirimtarixione"
            element={<MoliyaShowroomdankirimtarixiOne />}
          />
          <Route
            path="/savdobolimibuyurtmalarroyhati"
            element={<Savdobolimibuyurtmalarroyhati />}
          />
          <Route path="/buyurtmalarone" element={<BuyurtmalarOne />} />
          <Route path="/buyurtmalar" element={<Buyurtmalar />} />
          <Route path="/buyurtmalartwo" element={<BuyurtmalarTwo />} />
          <Route path="/royhatgaolishnine" element={<RoyhatgaolishNine />} />
          <Route path="/royhatgaolishten" element={<RoyhatgaolishTen />} />
          <Route path="/moliyachiqimtarixi" element={<MoliyaChiqimtarixi />} />
          <Route
            path="/moliyachiqimtarixithree"
            element={<MoliyaChiqimtarixiThree />}
          />
          <Route
            path="/moliyachiqimtarixione"
            element={<MoliyaChiqimtarixiOne />}
          />
          <Route
            path="/moliyachiqimtarixififteen"
            element={<MoliyaChiqimtarixiFifteen />}
          />
          <Route
            path="/moliyachiqimtarixifourteen"
            element={<MoliyaChiqimtarixiFourteen />}
          />
          <Route
            path="/moliyachiqimtarixieleven"
            element={<MoliyaChiqimtarixiEleven />}
          />
          <Route
            path="/moliyachiqimtarixithirteen"
            element={<MoliyaChiqimtarixiThirteen />}
          />
          <Route
            path="/moliyachiqimtarixitwelve"
            element={<MoliyaChiqimtarixiTwelve />}
          />
          <Route
            path="/moliyavalyutaayriboshlash"
            element={<MoliyaValyutaayriboshlash />}
          />
          <Route
            path="/moliyavalyutaayriboshlashtarixi"
            element={<MoliyaValyutaayriboshlashtarixi />}
          />
          <Route
            path="/ishlabchiqarishsexijoriybuyurtmalar"
            element={<IshlabchiqarishsexiJoriybuyurtmalar />}
          />
          <Route
            path="/ishlabchiqarishsexijoriybuyurtmalarone"
            element={<IshlabchiqarishsexiJoriybuyurtmalarOne />}
          />
          <Route
            path="/ishlabchiqarishsexijoriybuyurtmalartwo"
            element={<IshlabchiqarishsexiJoriybuyurtmalarTwo />}
          />
          <Route
            path="/ishlabchiqarishsexijoriybuyurtmalarthree"
            element={<IshlabchiqarishsexiJoriybuyurtmalarThree />}
          />
          <Route
            path="/royhatgaolishtwelve"
            element={<RoyhatgaolishTwelve />}
          />
          <Route
            path="/royhatgaolishthirteen"
            element={<RoyhatgaolishThirteen />}
          />
          <Route
            path="/savdobolimibuyurtmalarroyhatione"
            element={<SavdobolimibuyurtmalarroyhatiOne />}
          />
          <Route
            path="/savdobolimibuyurtmauchunzayavka"
            element={<Savdobolimibuyurtmauchunzayavka />}
          />
          <Route path="/buyurtmalarthree" element={<BuyurtmalarThree />} />
          <Route path="/buyurtmalarfour" element={<BuyurtmalarFour />} />
          <Route
            path="/moliyabuyurtmagachiqimtarixione"
            element={<MoliyaBuyurtmagachiqimtarixiOne />}
          />
          <Route
            path="/moliyabuyurtmagachiqimtarixidavomione"
            element={<MoliyaBuyurtmagachiqimtarixidavomiOne />}
          />
          <Route
            path="/moliyahodimlarroyhatisix"
            element={<MoliyaHodimlarroyhatiSix />}
          />
          <Route
            path="/ishlabchiqarishsexibuyurtmaqoldiqid"
            element={<IshlabchiqarishsexiBuyurtmaqoldiqID />}
          />
          <Route
            path="/ishlabchiqarishsexibuyurtmaqoldiqidbuyurtmanomeri"
            element={<IshlabchiqarishsexiBuyurtmaqoldiqIDbuyurtmanomeri />}
          />
          <Route
            path="/savdobolimitolovqabuli"
            element={<Savdobolimitolovqabuli />}
          />
          <Route
            path="/savdobolimitolovhisobi"
            element={<Savdobolimitolovhisobi />}
          />
          <Route
            path="/savdobolimitolovtarixi"
            element={<Savdobolimitolovtarixi />}
          />
          <Route
            path="/showroommijozlarroyhatione"
            element={<ShowroomMijozlarroyhatiOne />}
          />
          <Route
            path="/ishlabchiqarishsexibrakmahsulotlarhisobiseven"
            element={<IshlabchiqarishsexiBrakmahsulotlarhisobiSeven />}
          />
          <Route
            path="/ishlabchiqarishsexione"
            element={<IshlabchiqarishsexiOne />}
          />
          <Route
            path="/moliyahodimlarroyhati"
            element={<MoliyaHodimlarroyhati />}
          />
          <Route
            path="/moliyahodimlarroyhatifive"
            element={<MoliyaHodimlarroyhatiFive />}
          />
          <Route
            path="/moliyahodimlarroyhatieight"
            element={<MoliyaHodimlarroyhatiEight />}
          />
          <Route
            path="/moliyahodimlarroyhatiten"
            element={<MoliyaHodimlarroyhatiTen />}
          />
          <Route
            path="/moliyahodimlarroyhatieleven"
            element={<MoliyaHodimlarroyhatiEleven />}
          />
          <Route
            path="/moliyahodimlarroyhatiseven"
            element={<MoliyaHodimlarroyhatiSeven />}
          />
          <Route
            path="/moliyahodimlarroyhatifour"
            element={<MoliyaHodimlarroyhatiFour />}
          />
          <Route
            path="/moliyahodimlarroyhatione"
            element={<MoliyaHodimlarroyhatiOne />}
          />
          <Route
            path="/ishlabchiqarishsexibrakmahsulotlarhisobithree"
            element={<IshlabchiqarishsexiBrakmahsulotlarhisobiThree />}
          />
          <Route
            path="/ishlabchiqarishsexibrakmahsulotlarhisobisix"
            element={<IshlabchiqarishsexiBrakmahsulotlarhisobiSix />}
          />
          <Route
            path="/moliyahodimlarroyhatinine"
            element={<MoliyaHodimlarroyhatiNine />}
          />
          <Route
            path="/moliyahodimlarroyhatitwo"
            element={<MoliyaHodimlarroyhatiTwo />}
          />
          <Route
            path="/moliyahodimlarroyhatithree"
            element={<MoliyaHodimlarroyhatiThree />}
          />
          <Route
            path="/ishlabchiqarishsexibrakmahsulotlarhisobieleven"
            element={<IshlabchiqarishsexiBrakmahsulotlarhisobiEleven />}
          />
          <Route
            path="/ishlabchiqarishsexibrakmahsulotlarhisobiten"
            element={<IshlabchiqarishsexiBrakmahsulotlarhisobiTen />}
          />
          <Route
            path="/ishlabchiqarishsexi"
            element={<Ishlabchiqarishsexi />}
          />
          <Route
            path="/ishlabchiqarishsexibrakmahsulotlarhisobinine"
            element={<IshlabchiqarishsexiBrakmahsulotlarhisobiNine />}
          />
          <Route
            path="/ishlabchiqarishsexibrakmahsulotlarhisobifour"
            element={<IshlabchiqarishsexiBrakmahsulotlarhisobiFour />}
          />
          <Route
            path="/ishlabchiqarishsexibrakmahsulotlarhisobifive"
            element={<IshlabchiqarishsexiBrakmahsulotlarhisobiFive />}
          />
          <Route
            path="/royhatgaolisheleven"
            element={<RoyhatgaolishEleven />}
          />
          <Route
            path="/royhatgaolishfourteen"
            element={<RoyhatgaolishFourteen />}
          />
          <Route
            path="/ishlabchiqarishsexibrakmahsulotlarhisobieight"
            element={<IshlabchiqarishsexiBrakmahsulotlarhisobiEight />}
          />
          <Route
            path="/ishlabchiqarishsexibrakmahsulotlarhisobi"
            element={<IshlabchiqarishsexiBrakmahsulotlarhisobi />}
          />
          <Route
            path="/ishlabchiqarishsexibrakmahsulotlarhisobitwo"
            element={<IshlabchiqarishsexiBrakmahsulotlarhisobiTwo />}
          />
          <Route
            path="/ishlabchiqarishsexibrakmahsulotlarhisobione"
            element={<IshlabchiqarishsexiBrakmahsulotlarhisobiOne />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

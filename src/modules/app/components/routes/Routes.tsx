import React from "react";
import { /* RouteComponentProps */ Redirect, Switch } from "react-router";
import { Router, Route } from "react-router-dom";
import history from "../history";
import { Paths } from "./types";
import { NotFound } from "./NotFound";
import { StyledRoutesContainer } from "./style";
import Footer from "../footer";
import Navbar from "../navbar";
import Home from "../../../home";
import Trade from "../../../trade";
import { MainContainer } from "../../../../shared/styles/styled";
import Liquidity from "../../../liquidity";
import AddLiquidity from "../../../addLiquidity";
import Farms from "../../../farms";
import Pools from "../../../pools";
import Lottery from "../../../lottery";

// import wallet from "../../../../utils/wallet";
// import { useDispatch } from "react-redux";
// import { Login, setChainIdValue } from "../../../../logic/actions";

const notFoundRoute: RouteDefinition = {
  path: "*",
  component: NotFound,
  protected: false,
  title: "",
};

export const routes: RouteDefinition[] = [
  {
    path: Paths.root,
    component: Home,
    protected: false,
    redirect: Paths.home,
    title: "Home",
    pathType: 0,
  },
  {
    path: Paths.home,
    component: Home,
    protected: false,
    redirect: Paths.home,
    title: "Home",
    pathType: 0,
  },
  {
    path: Paths.trade,
    component: Trade,
    protected: false,
    redirect: Paths.trade,
    title: "Trade",
    pathType: 1,
  },
  {
    path: Paths.liquidity,
    component: Liquidity,
    protected: false,
    redirect: Paths.liquidity,
    title: "Liquidity",
    pathType: 2,
  },
  {
    path: Paths.addLiquidity,
    component: AddLiquidity,
    protected: false,
    redirect: Paths.addLiquidity,
    title: "AddLiquidity",
    pathType: 3,
  },
  {
    path: Paths.farms,
    component: Farms,
    protected: false,
    redirect: Paths.farms,
    title: "Farms",
    pathType: 4,
  },
  {
    path: Paths.pools,
    component: Pools,
    protected: false,
    redirect: Paths.pools,
    title: "Pools",
    pathType: 5,
  },
  {
    path: Paths.lottery,
    component: Lottery,
    protected: false,
    redirect: Paths.lottery,
    title: "Lottery",
    pathType: 6,
  },
].concat(notFoundRoute as any); // Ensure that notFound is the last route

export interface RouteDefinition {
  path: string;
  protected?: boolean;
  redirect?: string;
  component?: any;
  routes?: RouteDefinition[];
  title?: string;
  pathType?: number;
}

interface Props {
  // userLoaded: boolean
}
interface RoutesProps {}

function getRouteRenderWithAuth(route: RouteDefinition, i: number) {
  return () => <route.component />;
}

const Routes: React.FC<Props & RoutesProps> = () => {
  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   const walletReconnect = async () => {
  //     //@ts-ignore
  //     const walletConnected = JSON.parse(localStorage.getItem("walletConnected"));
  //     //@ts-ignore
  //     const walletConnect = JSON.parse(localStorage.getItem("walletConnect"));
  //     //@ts-ignore
  //     const walletType = JSON.parse(localStorage.getItem("walletType"));
  //     try {
  //       const chainid = await wallet.web3.eth.getChainId();
  //       dispatch(setChainIdValue(chainid));
  //     }
  //     catch (e) {
  //       dispatch(setChainIdValue(0));

  //     }

  //     if (walletConnected) {
  //       //@ts-ignore
  //       if (window.BinanceChain === undefined && walletType === 7) {
  //         localStorage.clear();
  //         window.location.reload();
  //       } else {
  //         try {
  //           await wallet.setProvider(walletType);
  //           const address = await wallet.login(walletType);
  //           dispatch(Login(address));
  //         } catch (err) {
  //           console.log("error in reconnect", err);
  //         }
  //       }
  //     }
  //   };
  //   walletReconnect();
  // }, []);

  return (
    <Router history={history}>
      <StyledRoutesContainer>
        <Navbar />
        <MainContainer>
          <Switch>
            <Redirect exact from="/" to={Paths.home} />
            {routes.map((route, i) => {
              const render = getRouteRenderWithAuth(route, i);
              const rest = { render };
              return <Route key={i} path={route.path} exact {...rest} />;
            })}
          </Switch>
        </MainContainer>
      </StyledRoutesContainer>
       <Footer />
    </Router>
  );
};

export default Routes;

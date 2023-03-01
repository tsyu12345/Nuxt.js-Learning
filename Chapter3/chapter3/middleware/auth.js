import Cookies from "universal-cookie";

export default (context) => {
    /**
     * context: {
     *  req,
     *  route,
     *  redirect, //302リダイレクトの機能を提供する関数
     * }
     */
    console.log(context.route.path);
    if(['/'].includes(context.route.path)) {
        return;
    }
    const cookies = context.req ? new Cookies(context.req.headers.cookie) : new Cookies();
    const credential = cookies.set('credential');

    if(credential && context.route.path === '/login') {
        context.redirect('/');
    } else if(!credential && context.route.path !== '/login') {
        context.redirect('/login');
    }
}
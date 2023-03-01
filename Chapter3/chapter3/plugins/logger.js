export default (context) => {
    const app = context.app;
    app.router.beforeEach((to, from, next) => {
        console.log(`ROUTER move to '${to.fullPath}`);
        next();
    });
}
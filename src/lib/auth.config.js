export const autentKonfig = {
  pages: {
    signIn: "/prijava"
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if(user) {
        token.id = user.id;
        token.administrator = user.administrator;
      }
      return token;
    },
    async session({session, token}) {
      if(token) {
        session.user.id = token.id;
        session.user.administrator = token.administrator;
      }
      return session;
    },
    authorized({ auth, request }) {
      // return false;

      // console.log(auth);
      // return true;

      const korisnik = auth?.user;
      const daliJeNaPlociAdministratora = request.nextUrl?.pathname.startsWith("/admin");
      const daliJeNaStraniciBlog = request.nextUrl?.pathname.startsWith("/blog");
      const daliJeNaStraniciPrijave = request.nextUrl?.pathname.startsWith("/prijava");

      // Samo administrator može doći do nadzorne ploče administratora
      if(daliJeNaPlociAdministratora && !korisnik?.administrator) {
        return false;
      }

      // Samo autentificirani korisnik može doći do stranice bloga
      if(daliJeNaStraniciBlog && !korisnik) {
        return false;
      }

      // Ukoliko je na stranici prijave autentificirani korisnik se preusmjerava na početnu stranicu
      if(daliJeNaStraniciPrijave && korisnik) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    }
  }
}
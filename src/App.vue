<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link class="nav-hi" to="/hi">Hi</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 50px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav-hi{
margin-left: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>    


// Commented

http://openjdk.java.net/projects/jigsaw/quick-start

Jigwas for Java SE 9

Used commands:

**Simple greetings**:

```
mkdir src\com.greetings\com\greetings
mkdir mods\com.greetings
javac -d mods/com.greetings src/com.greetings/module-info.java src/com.greetings/com/greetings/Main.java
java --module-path mods -m com.greetings/com.greetings.Main
```

**Multi-module**:

```
mkdir src\org.astro\org\astro
mkdir mods\org.astro
javac -d mods/org.astro src/org.astro/module-info.java src/org.astro/org/astro/World.java
javac --module-path mods -d mods/com.greetings src/com.greetings/module-info.java src/com.greetings/com/greetings/Main.java
java --module-path mods -m com.greetings/com.greetings.Main
```

**Multi-module compilation**

Failing in PowerShell :'(

**Packaging**

```
mkdir mlib
jar --create --file=mlib/org.astro@1.0.jar --module-version=1.0 -C mods/org.astro .
jar --create --file=mlib/com.greetings.jar --main-class=com.greetings.Main -C mods/com.greetings .
java -p mlib -m com.greetings
jar --describe-module --file=mlib/org.astro@1.0.jar
```

**Missing requires or missing exports**

Missing requires:

```
    module com.greetings {
        // requires org.astro;
    }
```

will lead to error:

```
PS D:\G33k_Zone\JavaSE\tutorial\jigsaw> javac --module-path mods -d mods/com.greetings src/com.greetings/module-info.java src/com.greetings/com/greetings/Main.java
src\com.greetings\com\greetings\Main.java:3: error: package org.astro is not visible
import org.astro.World;
          ^
  (package org.astro is declared in module org.astro, but module com.greetings does not read it)
1 error
```

Missing exports:

```
    // corrected
    module com.greetings {
        requires org.astro;
    }
    // new error
    module org.astro {
        // exports org.astro;
    }
```

will lead to error:

```
PS D:\G33k_Zone\JavaSE\tutorial\jigsaw> javac -d mods/org.astro src/org.astro/module-info.java src/org.astro/org/astro/World.java
PS D:\G33k_Zone\JavaSE\tutorial\jigsaw> javac --module-path mods -d mods/com.greetings src/com.greetings/module-info.java src/com.greetings/com/greetings/Main.java
src\com.greetings\com\greetings\Main.java:3: error: package org.astro is not visible
import org.astro.World;
          ^
  (package org.astro is declared in module org.astro, which does not export it)
1 error
```


**Services**

```
mkdir .\src\com.socket
mkdir .\src\com.socket\com\socket
mkdir .\src\com.socket\com\socket\spi
mkdir .\src\org.fastsocket\org\fastsocket
javac -d mods/com.socket src/com.socket/module-info.java src/com.socket/com/socket/NetworkSocket.java src/com.socket/com/socket/spi/NetworkSocketProvider.java
javac --module-path mods -d mods/org.fastsocket src/org.fastsocket/module-info.java src/org.fastsocket/org/fastsocket/FastNetworkSocket.java src/org.fastsocket/org/fastsocket/FastNetworkSocketProvider.java
javac --module-path mods -d mods/com.greetings src/com.greetings/module-info.java src/com.greetings/com/greetings/Main.java
java -p mods -m com.greetings/com.greetings.Main
```


Dropped:
https://dzone.com/articles/java-9-tutorial-step-by-step-from-zero-to-modules
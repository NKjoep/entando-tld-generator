# entando-tld-generator
This tool is a bash script that checkouts the entando-core-engine and the entando-plugins-parent project, 
seeks for .tld files inside them and with the help of the java program for the tld generation, generate the tld docs.

It repeats the generation for **every tag** of the git repository.
<hr />
[Browse the generated documentation online](http://nkjoep.github.io/entando-tld-generator/)
<hr />
### Usage

```bash
./tld-generator.sh
````

or

```bash
curl -L https://github.com/nkjoep/entando-tld-generator/tld-generator.sh | bash
```

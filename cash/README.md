# cash

Cash is a Javascript library that allows to convert currencies.

## How to use it ?

<ol>
<li>
First clone the repository project:

```sh
> cd /path/to/your/workspace
> git clone https://github.com/Soilhat/3-musketeers
```
</li>
<li>
	![fork](../fork.png)
	Feel free to Fork the repository if you'd like. Instructions in the first [Readme](../README.md)
</li>
</ol>

### Install cash project:

```sh
> cd path/to/your/workspace/3-musketeers/cash
> npm i
```
### Run conversions

The default conversion is 1USD to EUR (Euro), GBP (British Pound Sterling) and JPY (Japanese Yen). To see it run :

```sh
> node bin/index.js
```

To convert any amount in an another currency run :

```sh
> node bin/index.js <amount> <from> <to>
```

To change the default conversion you can run :

```sh
>node bin/index.js -s <from> <to>
```
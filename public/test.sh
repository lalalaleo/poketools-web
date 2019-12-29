#!/bin/bash
cd ./icon

for I in {1..890}; do
wget 'https://s.pokeuniv.com/pokemon/icon/'$I'.png'
done
x The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
Example Input: 3
Example Output: 3

x If the user capitalizes a letter, the result is lowercase.
exI: A
exO: a

x The program adds "way" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iway

x The program adds "way" to multiple letter words starting with a vowel.
exI: igloo
exO: iglooway

x For words beginning with a consonants, move the consonant to the end.
exI: cat
exO: atc

x For words beginning with a consonants, move the consonant to the end, and add "ay".
exI: cat
exO: atcay

x For words beginning with "y", treat "y" as a consonant.
exI: year
exO: earyay

For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
exI: chatter
exO: atterchay

If the first consonants start with "qu", move the "u" along with the "q".
exI: queer
exO: eerquay

If the first consonants include "qu", move the "u" along with the "q".
exI: squeal
exO: ealsquay

If the user enters punctuation, the program disregards it and tacks it on at the end.
exI: queer.
exO: eerquay.

If the user enters a sentence, all words are translated.
exI: The 3 quick brown foxes jump over a lazy dog.
exO: Ethay 3 ickquay ownbray oxesfay umpjay overway away azylay ogday.

The program capitalizes the first letter of sentences but not words.
exI: the cat runs
exO: Ethay atcay unsray

The program makes sure y works as vowel when following consonants.
exI: why
exO: ywhay

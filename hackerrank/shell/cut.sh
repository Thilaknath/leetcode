# cut 2nd and 7th letter
cut -c2,7

# cut using delimiter space
echo 'Hello ada' |cut -d ' ' -f 2

# cut spcifc words ignoring certain position Example Hello Ada will return ello Ad
echo 'Hello Ada' | cut -c2-7


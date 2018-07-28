# import the pandas library
import pandas as pd
import numpy as np

df = pd.DataFrame(np.random.randn(5, 3), index=['a', 'c', 'e', 'f',
'h'],columns=['one', 'two', 'three'])

df = df.reindex(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])

print (df)

#Check for Missing values
#print (df['one'].isnull())

#Replacing NaN with 0
#print ("NaN replaced with '0':")
#print (df.fillna(0))

#Fill NaN Forward and Backward
#print (df.fillna(method='pad'))
#print (df.fillna(method='bfill'))

#Drop Missing Values
#print (df.dropna())
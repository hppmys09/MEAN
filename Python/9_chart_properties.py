

import numpy as np 
import matplotlib.pyplot as plt 

x = np.arange(0,10) 
y = x ** 2 

	
#Labeling the Axes and Title
plt.title("Graph Drawing") 
plt.xlabel("Time") 
plt.ylabel("Distance")


#Simple Plot
plt.plot(x,y)
#plt.plot(x,y)


#Annotate
plt.annotate(xy=[2,1], s='Second Entry') 
plt.annotate(xy=[4,6], s='Third Entry') 

plt.show()

# save in pdf formats
plt.savefig('timevsdist.pdf', format='pdf')
# Cousins

## Family Relationship Terms

### Cousins

**First Cousins** are the children of siblings. They share a set of grandparents. First cousins are the same generation as each other. They're both two generations away from the grandparents they share.
**Second Cousins** are the children of first cousins. They're the same generation as each other, because they share a set of great-grandparents.
**Third Cousins** are the children of second cousins. They're in the same generation as each other, because they share a set of great-great-grandparents.
...and so on.

### Removed

Removed means a different generation. When cousins are in different generations than each other, we say they're removed. "Removed" is like “grand” and “great,” but with cousins.

Once removed means a difference of one generation, twice removed means a difference of two generations, and so forth.

## Example

A graph representation of given family, considering only mother's descents, would look like this:

```
       A
     /   \
    B     C
   / \   / \
  E   F G   H
 /   /    \
N   J      K
   /      /
  M      P
```

Where B and C are children of A, E and F are children of B and so on.

We want to determine the family distance between a couple of cousins.

Taken from [Family Relationship Terms](https://support.ancestry.com/s/article/Understanding-Kinship-Terms?language=en_US)

From our previous example we can say

- E and G are first cousins
- E and H are first cousins
- J and K are second cousins
- M and P are third cousins
- J and H are first cousings once removed
- M and H are first cousings twice removed

## Exercise

Implement a function that, provided two cousins and a family returns their family distance

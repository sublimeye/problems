# for (( id=1; id <= 30; id = id + 10))
# do
#     # echo $((id+1))
#     # if (i % 10 === 0)
    leetcode show $((id+0)) -gx -l javascript &
#     leetcode show $((id+1)) -gx -l javascript &
#     leetcode show $((id+2)) -gx -l javascript &
#     leetcode show $((id+3)) -gx -l javascript &
#     leetcode show $((id+4)) -gx -l javascript &
#     leetcode show $((id+5)) -gx -l javascript &
#     leetcode show $((id+6)) -gx -l javascript &
#     leetcode show $((id+7)) -gx -l javascript &
#     leetcode show $((id+8)) -gx -l javascript &
#     leetcode show $((id+9)) -gx -l javascript
# done

# N=3
(
for (( id=11; id <= 1178; id++)) ; do
#   ((i = i % N)); ((i++==0)) && wait
  leetcode show ${id} -gx -l javascript
#   echo {$id}
#   task "$thing" &
done
)
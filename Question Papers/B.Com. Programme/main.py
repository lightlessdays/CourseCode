import os




def list_folders():
    # Get the current directory
    current_directory = os.getcwd()

    # List all items in the current directory
    items = os.listdir(current_directory)

    # Filter out only the directories
    folders = [item for item in items if os.path.isdir(os.path.join(current_directory, item))]

    return folders

if __name__ == "__main__":
    folders = list_folders()
    print("Folders in the current subfolder:")
    for folder in folders:
        a = '''{{
      "Name": "{}",
      "Solutions": "https://www.dhruvbadaya.in/CourseCode/Question Papers/B.Com. Programme/{}"
    }}'''
        print(a.format(folder,folder)+",")
        

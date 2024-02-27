(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }


    class User extends Person {

        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({ email, role, name, gender, birthdate }: UserProps) {
            super({ name, gender, birthdate });
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        lastOpenFolder: string;
        workingDirectory: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }


    class UserSettings extends User {
        public lastOpenFolder: string;
        public workingDirectory: string;
        constructor({ lastOpenFolder, workingDirectory, email, role, name, gender, birthdate }: UserSettingsProps) {
            super({ email, role, name, gender, birthdate });
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }


    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'frank@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Frank',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });


})();